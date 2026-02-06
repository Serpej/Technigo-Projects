/// <reference types="vite/client" />

// Declare CSS files for side-effect imports
declare module "*.css" {
  const content: any;
  export default content;
}