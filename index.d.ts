declare module 'react-native-document-picker' {
  type UTI = 'public.png' | 'public.jpeg' | 'com.adobe.pdf' | 'org.openxmlformats.wordprocessingml.document' | 'org.openxmlformats.spreadsheetml.sheet' | 'org.openxmlformats.presentationml.presentation';
  type MimeType = 'image/jpg' | 'image/jpeg' | 'image/png' | 'application/pdf' | 'application/vnd.ms-excel' | 'application/msword' | 'application/vnd.ms-powerpoint';
  type Extension = '.jpeg' | '.jpg' | '.png' | '.txt' | '.pdf' | '.xls' | '.xlsx' | '.doc' | '.docx' | '.tiff' | '.ppt' | '.pptx';

  type DocumentType = {
    android: MimeType | MimeType[]
    ios: UTI | UTI[]
    windows: Extension | Extension[]
  };

  type Types = {
    mimeTypes: {
      allFiles: '*/*',
      audio: 'audio/*',
      doc: 'application/msword',
      excel: 'application/vnd.ms-excel',
      images: 'image/*',
      plainText: 'text/plain',
      pdf: 'application/pdf',
      powerpoint: 'application/vnd.ms-powerpoint',
      video: 'video/*', 
    },
    utis: {
      allFiles: 'public.content',
      audio: 'public.audio',
      doc: 'org.openxmlformats.wordprocessingml.document',
      excel: 'org.openxmlformats.spreadsheetml.sheet',
      images: 'public.image',
      plainText: 'public.plain-text',
      pdf: 'com.adobe.pdf',
      powerpoint: 'org.openxmlformats.presentationml.presentation',
      video: 'public.movie',
    },
    extensions: {
      allFiles: '*',
      audio:
        '.3g2 .3gp .aac .adt .adts .aif .aifc .aiff .asf .au .m3u .m4a .m4b .mid .midi .mp2 .mp3 .mp4 .rmi .snd .wav .wax .wma',
      doc: '.doc .docx',
      excel: '.xls .xlsx',
      images: '.jpeg .jpg .png, .tiff',
      plainText: '.txt',
      pdf: '.pdf',
      powerpoint: '.ppt .pptx',
      video: '.mp4',
    },
  };
  type PlatformTypes = {
    android: Types['mimeTypes']
    ios: Types['utis']
    windows: Types['extensions']
  };
  interface DocumentPickerOptions<OS extends keyof PlatformTypes> {
    type: Array<PlatformTypes[OS][keyof PlatformTypes[OS]]> | DocumentType[OS]
  }
  interface DocumentPickerResponse {
    uri: string;
    type: string;
    name: string;
    size: string;
  }
  type Platform = 'ios' | 'android' | 'windows'
  export default class DocumentPicker<OS extends keyof PlatformTypes = Platform> {
    static types: PlatformTypes['ios'] | PlatformTypes['android'] | PlatformTypes['windows']
    static pick<OS extends keyof PlatformTypes = Platform>(
      options: DocumentPickerOptions<OS>
    ): Promise<DocumentPickerResponse>;
    static pickMultiple<OS extends keyof PlatformTypes = Platform>(
      options: DocumentPickerOptions<OS>
    ): Promise<DocumentPickerResponse[]>;
    static isCancel<IError extends {code?: string}>(err?: IError): boolean;
  }
}
