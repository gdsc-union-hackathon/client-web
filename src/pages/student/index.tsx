import styled from "styled-components";
import { useRouter } from "next/router";

import TeacherSerch from "@/components/student/teacherSerch";

const Student = () => {
    
    const router = useRouter();

    const userName = router.query.userName;

    console.log(userName);
    

    return (
        <div>
            <div>
                student
            </div>
            <div>{userName}</div>
            <TeacherSerch />
        </div>
    );
};

export default Student;