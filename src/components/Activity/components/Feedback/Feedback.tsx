import Card from "@components/Card";
import {
  StyledText,
  StyledInfo,
  StyledName,
  StyledRole,
} from "./Feedback.styles";
import { CommentOutlined } from "@ant-design/icons";
import { Avatar } from "antd";

const mockData = {
  text: "The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe the same vocabulary. The languages only in their grammar.",
  name: "Marie Minnick",
  image: "https://randomuser.me/api/portraits/women/44.jpg",
  role: "Marketing Manager",
};

function Feedback() {
  return (
    <Card style={{ padding: "0", height: "max-content" }}>
      <StyledText>
        <CommentOutlined style={{ fontSize: "40px" }} />
        <p>{mockData.text}</p>
      </StyledText>
      <StyledInfo>
        <Avatar
          src="https://randomuser.me/api/portraits/women/44.jpg"
          size={52}
        />
        <div>
          <StyledName>{mockData.name}</StyledName>
          <StyledRole>{mockData.role}</StyledRole>
        </div>
      </StyledInfo>
    </Card>
  );
}

export default Feedback;
