"use client";

import AnswerCard from "@/components/AnswerCard";
import { Container, Typography } from "@mui/material";

const Page: React.FC = () => {
    return (
        <Container>
            <Typography variant="h2" sx={{ mt: 2, textAlign: 'center', color: '#261f49' }}>
                Answers
            </Typography>
            <AnswerCard />
        </Container>
    );
};

export default Page;