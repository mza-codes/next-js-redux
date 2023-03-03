// @ts-ignore
import styled from "styled-components";

export const HandledText = styled.p`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    word-wrap: break-word;
    -webkit-line-clamp: ${(props: any) => props.maxlines ?? 2};
    -webkit-box-orient: vertical;
`;

/**
 * @param {`/person/${id}`}
 * @param {`/discover/movie?with_cast=${id}&page=${page}`}
 * */
