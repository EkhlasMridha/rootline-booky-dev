const authRoutes: string[] = ['/dashboard','/settings'];

export function isAuhtRoute(url: string) {
  let refinedRoute = getRefinedRoute(url);
  let check = authRoutes.includes(refinedRoute);

  return check;
}

function getRefinedRoute(url: string) {
  let route = url.split('?');

  let refined = route[0];
  return refined;
}
