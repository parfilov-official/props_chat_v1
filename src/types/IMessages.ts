export interface IMessages {
  message: {
    time: string,
    from: {
      name: string,
    },
    text: string | undefined,
  }
}