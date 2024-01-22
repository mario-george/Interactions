import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/api/webhook/clerk"],
  // An array of public routes that don't require authentication.
  ignoredRoutes: ["/api/webhook/clerk"],
  // An array of routes to be ignored by the authentication middleware.
});
/* 
 
 publicRoutes: This is an array of routes that should be accessible to both signed-in and signed-out users
 . For example, you might include routes like "/sign-in" and "/sign-up" in this array. 
 If a user tries to access a route listed in publicRoutes, they will be able to do so regardless of their authentication status.

ignoredRoutes: This is an array of routes where the authMiddleware should not run at all.
For example, you might include routes like "/login" in this array.
 If a user tries to access a route listed in ignoredRoutes, the authMiddleware will not interfere with the request.
 */
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
