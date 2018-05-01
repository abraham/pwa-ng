interface Navigator {
  share: (data: { text: string, url: string }) => Promise<any>;
}
