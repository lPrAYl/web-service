const getRouteParams = <T extends Record<string, boolean>>(object: T) => {
  return Object.keys(object).reduce((acc, key) => ({ ...acc, [key]: `:${key}` }), {}) as Record<keyof T, string>
}

export const getAllPersonsRoute = () => '/'

export const viewPersonRouteParams = getRouteParams({ personNick: true })
export type ViewPersonRouteParams = typeof viewPersonRouteParams
export const getViewPersonsRoute = ({ personNick }: ViewPersonRouteParams) => `/persons/${personNick}`

export const getNewPersonRoute = () => '/persons/new'
