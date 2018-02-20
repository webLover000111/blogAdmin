/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}
declare var md: any;
declare function editormd(id: string, option: any): any;
