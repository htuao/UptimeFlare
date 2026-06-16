import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  title: "Gouer Status",
  links: [
    { link: 'https://github.com/htuao', label: 'GitHub' },
    { link: 'mailto:mail@mail.gouer.eu.org', label: 'Email Me', highlight: true },
  ],
  group: {
    '🌐 网站': [
      'monitor_edt',
      'monitor_top',
      'monitor_page',
      'monitor_news',
      'monitor_tmp',
      'monitor_tmdb',
    ],
    '🔀 网络服务': [
      'monitor_proxy',
      'monitor_sub',
      'monitor_cors',
    ],
    '📧 邮件服务': [
      'monitor_mail',
    ],
    '📊 基础设施': [
      'monitor_monitor',
    ],
  },
  maintenances: {
    upcomingColor: 'gray',
  },
}

const workerConfig: WorkerConfig = {
  kvWriteCooldownMinutes: 3,
  // passwordProtection: 'status:your_password',
  monitors: [
    // ===== 网站 =====
    {
      id: 'monitor_edt',
      name: 'EDT',
      method: 'GET',
      target: 'https://edt.gouer.eu.org',
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'monitor_top',
      name: 'Top',
      method: 'GET',
      target: 'https://top.gouer.eu.org',
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'monitor_page',
      name: 'Page',
      method: 'GET',
      target: 'https://page.gouer.eu.org',
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'monitor_news',
      name: 'News',
      method: 'GET',
      target: 'https://news.gouer.eu.org',
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'monitor_tmp',
      name: 'Tmp',
      method: 'GET',
      target: 'https://tmp.gouer.eu.org',
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'monitor_tmdb',
      name: 'TMDB',
      method: 'GET',
      target: 'https://tmdb.gouer.eu.org',
      expectedCodes: [200],
      timeout: 10000,
    },
    // ===== 网络服务 =====
    {
      id: 'monitor_proxy',
      name: 'Proxy',
      method: 'GET',
      target: 'https://proxy.gouer.eu.org',
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'monitor_sub',
      name: 'Sub',
      method: 'GET',
      target: 'https://sub.gouer.eu.org',
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'monitor_cors',
      name: 'CORS',
      method: 'GET',
      target: 'https://cors.gouer.eu.org',
      expectedCodes: [200],
      timeout: 10000,
    },
    // ===== 邮件服务 =====
    {
      id: 'monitor_mail',
      name: 'Mail',
      method: 'GET',
      target: 'https://mail.gouer.eu.org',
      expectedCodes: [200],
      timeout: 10000,
    },
    // ===== 基础设施 =====
    {
      id: 'monitor_monitor',
      name: 'Monitor',
      method: 'GET',
      target: 'https://monitor.gouer.eu.org',
      expectedCodes: [200],
      timeout: 10000,
    },
  ],
  notification: {
    webhook: {
      url: 'https://api.telegram.org/5611935283:AAEL4oxmyYBftcubNc6yR_rQsVm0d6oPOf8/sendMessage',
      method: 'POST',
      payloadType: 'x-www-form-urlencoded',
      payload: {
        chat_id: 1275909529,
        text: '$MSG',
      },
      timeout: 10000,
    },
    timeZone: 'Asia/Shanghai',
    gracePeriod: 5,
    skipErrorChangeNotification: true,
  },
  callbacks: {
    onStatusChange: async (
      env: any,
      monitor: any,
      isUp: boolean,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {},
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {},
  },
}

const maintenances: MaintenanceConfig[] = []

export { maintenances, pageConfig, workerConfig }
