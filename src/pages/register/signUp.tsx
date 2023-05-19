import styled from "styled-components";
import { useRouter } from "next/router";
import LottieWrapper from "@/components/common/LottieWrapper";
import noBugFlower from "@/assets/lottieJSON/noBugFlower.json";
import { MouseEvent, FormEvent, ChangeEvent, useState } from "react";
import Link from "next/link";
import axios from "axios";

const SignUp = () => {
    const router = useRouter();
    const [id, setId] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [isStudent, setIsStudent] = useState<string>("학생");
    const [work, setWork] = useState<string>("");
    const [isStudentClick, setIsStudentClick] = useState<boolean>(false);
    const [isTeacherClick, setIsTeacherClick] = useState<boolean>(false);

    const onChangeId = (e: ChangeEvent<HTMLInputElement>) => {
        setId(e.currentTarget.value);
        console.log(id);
    };
    const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value);
        console.log(name);
    };
    const onChangePhone = (e: ChangeEvent<HTMLInputElement>) => {
        setPhone(e.currentTarget.value);
        console.log(phone);
    };
    const onChangeWork = (e: ChangeEvent<HTMLInputElement>) => {
        setWork(e.currentTarget.value);
        console.log(work);
    };

    const onClickTypeData = (e: MouseEvent<HTMLInputElement>) => {
        e.preventDefault();
        setIsStudent(e.currentTarget.value);
        console.log(isStudent);
    };

    const onsubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        axios.post("/user/signup", {
            loginId: id,
            name: name,
            phoneNum: phone,
            status: isStudent,
            workPlace: work,
        }).then((res) => {
            console.log(res.data);
            router.push("/register/signIn");
        }).catch((err) => {
            console.log(err);
        });
    };

    return (
        <TotalWrapper>
            <SignUpWrapper>
                <RegisterForm onSubmit={onsubmit}>
                    <h1>회원가입</h1>
                    <div>
                        <LabelForm htmlFor="id">ID</LabelForm>
                        <br />
                        <InputForm
                            type="text"
                            id="id"
                            value={id}
                            onChange={onChangeId}
                        ></InputForm>
                    </div>
                    <div>
                        <LabelForm htmlFor="name">이름</LabelForm>
                        <br />
                        <InputForm
                            type="text"
                            id="name"
                            value={name}
                            onChange={onChangeName}
                        ></InputForm>
                    </div>
                    <div>
                        <LabelForm htmlFor="phone">전화번호</LabelForm>
                        <br />
                        <InputForm
                            type="tel"
                            id="phone"
                            value={phone}
                            onChange={onChangePhone}
                        ></InputForm>
                    </div>
                    <ChipListDiv>
                        <ChipInput
                            isClick={isStudentClick}
                            placeholder="학생"
                            defaultValue={"학생"}
                            onClick={(e) => {
                                onClickTypeData(e);
                                setIsTeacherClick(false);
                                setIsStudentClick(true);
                            }}
                        />
                        <ChipInput
                            isClick={isTeacherClick}
                            placeholder="선생님"
                            defaultValue={"선생님"}
                            onClick={(e) => {
                                onClickTypeData(e);
                                setIsTeacherClick(true);
                                setIsStudentClick(false);
                            }}
                        />
                    </ChipListDiv>
                    <div>
                        {isStudent === "학생" ? null : (
                            <div>
                                <LabelForm htmlFor="work">근무지</LabelForm>{" "}
                                <br />
                                <InputForm
                                    type="text"
                                    id="work"
                                    value={work}
                                    onChange={onChangeWork}
                                ></InputForm>
                            </div>
                        )}
                    </div>
                    <BtnDiv>
                        <Link href={"/register/signIn"}>
                            <button>뒤로가기</button>
                        </Link>
                        <button type="submit">회원가입</button>
                    </BtnDiv>
                </RegisterForm>
            </SignUpWrapper>
            <EveryLottieWrapper>
                <FloatingFlowerWrapper>
                    <LottieWrapper lottieData={noBugFlower}></LottieWrapper>
                </FloatingFlowerWrapper>
            </EveryLottieWrapper>
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
    background-color: white;
`;

const EveryLottieWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 50vw;
    height: 100vh;
    background-color: beige;
`;

const FloatingFlowerWrapper = styled.div`
    width: 40vw;
`;

const RegisterForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 50vw;
    height: 100vh;
`;

const LabelForm = styled.label`
    font-size: 1.5vw;
`;
const InputForm = styled.input`
    all: unset;
    width: 20vw;
    height: 5vh;
    border: 1px solid #768cff;
    border-radius: 5vw;
    padding-left: 1vw;
`;

const ChipListDiv = styled.div`
    display: flex;
    gap: 10px;
`;

const ChipInput = styled.input<{ isClick: boolean }>`
    all: unset;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 10.1vw;
    height: 5vh;
    margin-top: 0.5vh;

    border: 1px solid #768cff;
    border-radius: 5vw;

    font-size: 1.5vw;
    text-align: center;

    background: ${({ isClick }) => {
        if (isClick) {
            return "#768cff";
        }
    }};
    color: ${({ isClick }) => {
        if (isClick) {
            return "white";
        }
    }};

    &:hover {
        cursor: pointer;
        background: #8a9eff;
    }
`;

const BtnDiv = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10px;
    margin-left: 15px;
    button {
        all: unset;
        margin: 20px;
        padding: 5px;
        font-size: 15px;
        color: #000;
        transition: transform 0.3s;
        &:hover {
            transform: translateY(-3px);
            cursor: pointer;
        }
    }
    a {
        all: unset;
    }
`;
