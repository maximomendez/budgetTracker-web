import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const cookieStore = await cookies()

  const res = await fetch("http://localhost:3000/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Cookie: cookieStore?.toString()
    },
    body: JSON.stringify({
      query: `
        query getUserAuthenticated {
          getUserAuthenticated {
            id
            name
            email
            password
          }
        }
      `,
    }),
  });

  const { data } = await res?.json();

  if (!data?.getUserAuthenticated) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/"],
};
