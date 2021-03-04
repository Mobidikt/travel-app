interface IConfig {
  API_URL: string | undefined;
}

const config: IConfig = {
  API_URL: process.env.REACT_APP_API_URL,
}

export default config
