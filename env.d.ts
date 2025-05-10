declare namespace NodeJS {
  interface ProcessEnv {
    githubTokenHead: string; // 明确声明类型
    githubToken: string;
  }
}