import React, { useEffect, useRef, useState } from 'react';
import Styled from 'styled-components';
import Slide from './Slide';

const DATA = [
    { title: "개발자 성장 비결 공개!", url: "https://static.wanted.co.kr/images/banners/1460/619f3af7.jpg", text: 'Velog, 글 쓰는 개발자들의 이야기' },
    { title: "마케팅 주니어를 찾습니다", url: "https://static.wanted.co.kr/images/banners/1490/0b775035.jpg", text: '기업 과제 풀고 취업까지 한번에!' },
    { title: "해, 커리어 EP 02 공개", url: "https://static.wanted.co.kr/images/banners/1468/3df61cbc.jpg", text: '커리어 EP 02 공개마지막 관문 2라운드의 승자는?' },
    // PADDING
    { title: "개발자 성장 비결 공개!", url: "https://static.wanted.co.kr/images/banners/1460/619f3af7.jpg", text: 'Velog, 글 쓰는 개발자들의 이야기' },
    { title: "마케팅 주니어를 찾습니다", url: "https://static.wanted.co.kr/images/banners/1490/0b775035.jpg", text: '기업 과제 풀고 취업까지 한번에!' },
    { title: "해, 커리어 EP 02 공개", url: "https://static.wanted.co.kr/images/banners/1468/3df61cbc.jpg", text: '커리어 EP 02 공개마지막 관문 2라운드의 승자는?' },
    { title: "2022년 달라지는 노동법령", url: "https://static.wanted.co.kr/images/banners/1489/312a0c29.jpg", text: '노무관리 쟁점 한 눈에 파악하기' },
    { title: "포트폴리오를 부탁해!", url: "https://static.wanted.co.kr/images/banners/1487/0d36f0b5.jpg", text: '디자이너의 포폴 살펴보기' },
    { title: "성장하는 개발자가 되려면?", url: "https://static.wanted.co.kr/images/banners/1484/b2853456.jpg", text: 'OOO 검색하지 말 것!' },
    { title: "성과를 내는 마케팅", url: "https://static.wanted.co.kr/images/banners/1486/fba2df30.jpg", text: '실제 사례를 공개합니다!' },
    { title: "UX 디자이너의 커리어 설계", url: "https://static.wanted.co.kr/images/banners/1488/baa54448.jpg", text: '브랜드 가치를 더하는 디자인' },
    { title: "개발자 되고싶은 분들!?", url: "https://static.wanted.co.kr/images/banners/1473/41f7b36e.jpg", text: '프론트엔드 무료 교육과정 참여하기' },
    // PADDING
    { title: "개발자 성장 비결 공개!", url: "https://static.wanted.co.kr/images/banners/1460/619f3af7.jpg", text: 'Velog, 글 쓰는 개발자들의 이야기' },
    { title: "마케팅 주니어를 찾습니다", url: "https://static.wanted.co.kr/images/banners/1490/0b775035.jpg", text: '기업 과제 풀고 취업까지 한번에!' },
    { title: "해, 커리어 EP 02 공개", url: "https://static.wanted.co.kr/images/banners/1468/3df61cbc.jpg", text: '커리어 EP 02 공개마지막 관문 2라운드의 승자는?' },
]
const SLIDES_LENGTH = 11;

const Container = Styled.div`
    width: 80%;
    padding-left: 20%;
`;
const Button = Styled.button`
    z-index: 100;
    position: absolute;
    top: 170px;
    left: ${props => props.left}%;
    width: 20px;
    height: 60px;
    opacity: .5;
    border-radius: 15px;
    background-color: #fff;
`;
const SliderContainer = Styled.div`
    width: 80%;
    height: 300px;
    display: flex;
`;


// [TODO] 무한 스크롤 구현: 현재는 마지막 카드에서 반대편 카드로 돌아오는 형태로 동작함
// - 임시 구현을 위한 padding 때문에 initital index 값(3) 지정
// - previous/current/next 구분으로 각 위치를 갈아주는 형태로 구현하면 가능
//   - 추가로 current 카드에서는 DATA의 각 배열에 넣어둔 title, text를 활용해 추가 정보 카드도 표시해야 함
export default function Slider() {
    const [currentSlide, setCurrentSlide] = useState(3);
    const slideRef = useRef(null);
    const rightSlide = () => {
        if (SLIDES_LENGTH < currentSlide) {
            setCurrentSlide(3);
        } else {
            setCurrentSlide(currentSlide + 1);
        }
    };
    const leftSlide = () => {
        if (currentSlide === 0) {
            setCurrentSlide(SLIDES_LENGTH);
        } else {
            setCurrentSlide(currentSlide - 1);
        }
    };
    useEffect(() => {
        slideRef.current.style.transition = "all 0.5s ease-in-out";
        slideRef.current.style.transform = `translateX(-${currentSlide * 80}%)`;
        console.log(slideRef.current);
        const interval = setInterval(() => {
            rightSlide();
        }, 3000);
        return () => clearInterval(interval);
    }, [currentSlide]);

    return (
        <Container>
            <Button left={15} onClick={leftSlide}>
                <span class="SvgIcon_SvgIcon__root__8vwon"><svg class="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 18 18"><path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path></svg></span>
            </Button>
            <SliderContainer ref={slideRef}>
                {DATA.map((data) => <Slide image={data.url} text={data.text} />)}
            </SliderContainer>
            <Button left={85} onClick={rightSlide}>
                <svg class="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 18 18"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path></svg>
            </Button>
        </Container>
    );
}