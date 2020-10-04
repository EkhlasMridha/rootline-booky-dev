const authRoutes: string[] = ['/dashboard'];

export function isAuhtRoute(url: string) {
  let refinedRoute = getRifinedRoute(url);
  let check = authRoutes.includes(refinedRoute);

  return check;
}

function getRifinedRoute(url: string) {
  let route = url.split('?');

  let refined = route[0];
  return refined;
}
