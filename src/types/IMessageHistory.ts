export interface IMessageHistory {
  list: [
    {
      id: string,
      from: {
        name: string,
      },
      type: string,
      time: string,
      text: string | undefined,
    }
  ]
}