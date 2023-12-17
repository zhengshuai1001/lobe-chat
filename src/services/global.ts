// const VERSION_URL = 'https://registry.npmmirror.com/@lobehub/chat';

class GlobalService {
  /**
   * get latest version from npm
   */
  getLatestVersion = async (): Promise<string> => {
    // const res = await fetch(VERSION_URL);
    // const data = await res.json();

    // return data['dist-tags']?.latest;
    return '0.114.2';
  };
}

export const globalService = new GlobalService();
