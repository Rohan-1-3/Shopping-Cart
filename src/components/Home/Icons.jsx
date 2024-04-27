import { userData } from "../../data/userData"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';

function Icons() {
    return (
        <>
            <a href={userData.github} target="_blank"><GitHubIcon fontSize="large"/></a>
            <a href={userData.linkedIn} target="_blank"><LinkedInIcon fontSize="large"/></a>
            <a href={userData.twitter} target='_blank'><XIcon fontSize="large"/></a>
        </>
    );
}

export default Icons;