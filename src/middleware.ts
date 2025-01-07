import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const cookieStore = await cookies()
  const token = cookieStore.get('token')

  const res = await fetch("http://localhost:4000/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token?.value}`,
    },
    credentials: "include",
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
