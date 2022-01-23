import styled from "styled-components";

export const MyButton = styled.button(
    (props) => ({ backgroundColor: props.color }),
    {
        borderStyle: "none",
        borderRadius: "5px",
        color: "white",
        cursor: "pointer",
        fontSize: "14px",
        fontWeight: "bold",
        margin: "5px",
        padding: "7px",
        textTransform: "uppercase",
        height: "42px",
    },
    {
        "&:hover": { filter: "brightness(120%)", transition: ".5s" },
    }
);