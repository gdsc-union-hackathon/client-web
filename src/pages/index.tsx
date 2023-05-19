import styled from "styled-components";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
    const router = useRouter();

    const userStatus = router.query.status;
    const userName = router.query.userName;

    useEffect(() => {
        if (userStatus === "학생") {
            router.push({
                pathname: "/student",
                query: { userName: userName },
            });
        } else if (userStatus === "선생님") {
            router.push("/teacher");
        } else router.push("/register/signIn");
    }, [router, userName, userStatus]);

    /*
  useEffect에서 routeQuery를 받아서
  받은 값을 기준으로 if문을 돌린다.

  if (routeQuery.status === "student") {
    router.push("/student");
  }
  else if (routeQuery.status === "teacher") {
    router.push("/teacher");
  }
  else 
    router.push("/register/signIn");
  */

    return (
        <div>
            <h2>...Loading...</h2>
        </div>
    );
}
