const authPaths = ["/auth"];
const protectedPaths = ["/dashboard"];

export function pathMatchingChecker(currentPath: string, paths: Array<string>) {
  return paths.some((path) => currentPath.startsWith(path));
}

export const isPathMatchedWithAuthPaths = (currentPath: string) => pathMatchingChecker(currentPath, authPaths);
export const isPathMatchedWithProtectedPaths = (currentPath: string) =>
  pathMatchingChecker(currentPath, protectedPaths);
