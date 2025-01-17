import { Builder, buildByVite, buildByTsup } from '../builders'
import { readBuildConfig } from '../utils'
import type { BuildOptions } from '../types'

async function build(options: BuildOptions) {
  const builder = options.builder ?? Builder.Vite

  console.log('Current Builder: ', builder.toUpperCase())
  console.log()

  switch (builder) {
    case Builder.Vite: {
      await buildByVite(options)
      break
    }

    case Builder.Tsup: {
      await buildByTsup(options)
      break
    }

    default: {
      throw new Error('Unsupported build process.')
    }
  }
}

async function buildMultiple(entryFiles: string[], options: BuildOptions) {
  entryFiles.forEach(async (entryFile) => {
    await build({ ...options, entryFile })
  })
}

export async function buildPackage(name: string) {
  const options: BuildOptions = { name }

  const { builder, externals, skip, bin, entryFile, entryFiles } =
    readBuildConfig(name)
  if (skip) return

  options.bin = bin

  if (Array.isArray(externals)) {
    options.externals = externals
  }

  if (Array.isArray(entryFiles)) {
    await buildMultiple(entryFiles, options)
    return
  }

  if (entryFile) {
    options.entryFile = entryFile
  }

  options.builder = builder
  await build(options)
}
