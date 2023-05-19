import styled from "styled-components";
import { useRouter } from "next/router";

const SignUp = () =>{
    return (
        <TotalWrapper>
            <SignUpWrapper>
                회원가입 페이지
            </SignUpWrapper>
            <LottyWrapper>
                이미지나 로티 들어갈 공간임 ㅇㅇ
            </LottyWrapper>
        </TotalWrapper>
    );
};

export default SignUp;

const TotalWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    width: 100vw;
    height: 100vh;

    background-color: white;
`;

const SignUpWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 50vw;
    height: 100vh;
    background-color: aliceblue;
`;

const LottyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 50vw;
    height: 100vh;
    background-color: beige;
`;