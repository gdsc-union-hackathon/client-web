import styled from "styled-components";
import Image from "next/image";


const TeacherSerch = () => {
    return(
        <div>
            <input>
                teacherSerch
            </input>
            <div>
                <Image src={"/search.png"} alt={"searchImg"} fill sizes="10vw"></Image>
            </div>
        </div>
    );
};

export default TeacherSerch;