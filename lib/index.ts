import codes from './color-codes'

class Colors {
  static black(text: string): string {
    return this.ansiStyles(text, codes.fg.black, codes.fg.reset)
  }

  static red(text: string): string {
    return this.ansiStyles(text, codes.fg.red, codes.fg.reset)
  }

  static green(text: string): string {
    return this.ansiStyles(text, codes.fg.green, codes.fg.reset)
  }

  static yellow(text: string): string {
    return this.ansiStyles(text, codes.fg.yellow, codes.fg.reset)
  }

  static blue(text: string): string {
    return this.ansiStyles(text, codes.fg.blue, codes.fg.reset)
  }

  static magenta(text: string): string {
    return this.ansiStyles(text, codes.fg.magenta, codes.fg.reset)
  }

  static cyan(text: string): string {
    return this.ansiStyles(text, codes.fg.cyan, codes.fg.reset)
  }

  static white(text: string): string {
    return this.ansiStyles(text, codes.fg.white, codes.fg.reset)
  }

  static crimson(text: string): string {
    return this.ansiStyles(text, codes.fg.crimson, codes.fg.reset)
  }

  static strip(text: string): string {
    return text.replace(/\x1B\[\d+m/g, '')
  }

  private static ansiStyles(text: string, applyCode: number, resetCode: number): string {
    return `\x1b[${applyCode}m${text}\x1B[${resetCode}m`
  }
}

export default Colors
