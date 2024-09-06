import styled from "styled-components";

export default function SidebarOption({ Icon, title, id }) {


  return (
    <SidebarOptionContainer >
      {Icon && <Icon />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SidebarOptionChannel>
          <span>#</span>
          {title}
        </SidebarOptionChannel>
      )}
    </SidebarOptionContainer>
  );
}

const SidebarOptionContainer = styled.div`
  display: flex;
  font-size: 12px;
  align-items: center;
  padding-left: 2px;
  cursor: pointer;
  margin: 20px;

  :hover {
    opacity: 0.9;
    background-color: #340e36;
  }

  > h3 {
    margin-left: 15px;
    font-weight: 500;
  }

  > h3 > span {
    padding: 15px;
  }
`;

const SidebarOptionChannel = styled.div`
  // Add styles if needed
`;