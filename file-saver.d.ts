declare module 'file-saver' {
    const saveAs: (data: Blob, filename?: string, options?: any) => void;
    export default saveAs;
  }
  