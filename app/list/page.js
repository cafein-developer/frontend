//여기에 만드시면 됩니다
import './css/listStyle.css';


export default async function ListPage() {
  return (
    <div className='cafe_details'>
      {/* <header>
        <div className='header_top'>
          <h1 className='cafein_logo ir_pm'><a href="#">cafein-logo</a></h1>
          <button type='button' className='m_log'>로그인</button>
        </div>
      </header> */}
      <div className='modal'></div>
      <section>
        <h2 className='blind'>mv-slide</h2>
        <div className='mv_wrap'>
          <div className='mv_slide'>
            <div>
              mv01
            </div>
          </div>
        </div>
      </section>
      <main>
        <h2 className='blind'>cafe-info</h2>
        <div className='cafe_info'>
          <div className='cafe_name'>
            <h3>카페솔트</h3>
            <p>서울대입구역 기준 300m</p>
            <div className='comment'>
              <a href='#'></a>
            </div>
          </div>
          <div className='cafe_mood'>
            <div>Modern</div>
            <div>Simple</div>
          </div>
          <div className='cafe_address'>
            <span></span>
            <p>서울특별시 남부순환로 210길</p>
          </div>
        </div>
        <div className='cafe_menu'>
          <h3>메뉴정보</h3>
          <ul className='menu_list'>
            <li>
              <p>아메리카노</p>
              <b>5,000원</b>
            </li>
            <li>
              <p>카페라떼</p>
              <b>5,000원</b>
            </li>
            <li>
              <p>카푸치노</p>
              <b>5,000원</b>
            </li>
            <li>
              <p>카페모카</p>
              <b>5,000원</b>
            </li>
            <li>
              <p>카라멜마끼아또</p>
              <b>5,000원</b>
            </li>
            <li>
              <p>아이스티</p>
              <b>5,000원</b>
            </li>
          </ul>
          <button type='button' className='more_menu'>
            <p>더보기</p>
            <span></span>
          </button>
        </div>
        <div className='cafe_facility'>
          <h3>시설정보</h3>
          <ul className='facility_list'>
            <li>
              <div></div>
              <p>와이파이</p>
            </li>
            <li>
              <div></div>
              <p>야외석</p>
            </li>
            <li>
              <div></div>
              <p>단체석</p>
            </li>
            <li>
              <div></div>
              <p>반려동물</p>
            </li>
          </ul>
          <button type='button' className='more_menu'>
            <p>더보기</p>
            <span></span>
          </button>
        </div>
        <div className='review'>
          <div className='review_create'>
            <h3>리뷰(30)</h3>
            <input type='text' placeholder='리뷰를 작성해주세요.'></input>
          </div>
          <ul className='review_list'>
            <li>
              <div className='list_top'>
                <h4>닉네임1</h4>
                <b>2024년 2월 14일</b>
              </div>
              <div className='text_box'>
                <p>
                  사장님이 맛있고 커피가 친절해요.
                </p>
              </div>
            </li>
            <li>
              <div className='list_top'>
                <h4>닉네임2</h4>
                <b>2024년 2월 17일</b>
              </div>
              <div className='text_box'>
                <p>
                  사장님이 맛있고 커피가 친절해요. 사장님이 맛있고 커피가 친절해요. 사장님이 맛있고 커피가 친절해요. 사장님이 맛있고 커피가 친절해요. 사장님이 맛있고 커피가 친절해요. 사장님이 맛있고 커피가 친절해요. 사장님이 맛있고 커피가 친절해요. 사장님이 맛있고 커피가 친절해요.
                </p>
              </div>
              <button type='button'>더보기</button>
            </li>
            <li>
              <div className='list_top'>
                <h4>닉네임2</h4>
                <b>2024년 2월 17일</b>
              </div>
              <div className='text_box'>
                <p>
                  사장님이 맛있고 커피가 친절해요. 사장님이 맛있고 커피가 친절해요. 사장님이 맛있고 커피가 친절해요. 사장님이 맛있고 커피가 친절해요. 사장님이 맛있고 커피가 친절해요. 사장님이 맛있고 커피가 친절해요. 사장님이 맛있고 커피가 친절해요. 사장님이 맛있고 커피가 친절해요.
                </p>
              </div>
            </li>
          </ul>
          <div className='go_top'></div>
        </div>
        <div className='create_review_container'>
            <div className='create_review'>
              <button type='button' className='close_btn'></button>
              <div className='create_text'>
                <p>리뷰작성</p>
                <b><span>56</span>/최소 20자 작성</b>
              </div>
              <textarea placeholder='리뷰를 작성해주세요.'></textarea>
              <p className='review_policy'>리뷰 정책란 리뷰 정책란 리뷰 정책란 리뷰 정책란 리뷰 정책란 리뷰 정책란 리뷰 정책란 리뷰 정책란 리뷰 정책란 리뷰 정책란</p>
            </div>
            <button type='button' className='submit_btn'>작성완료</button>
        </div>
        <div className='choice_container'>
            <div className='choice'>
              <button type='button' className='close_btn'></button>
              <div className='choice_icon'></div>
              <p className='choice_text'>아래의 선택지 중<br></br>하나를 골라주세요!</p>
              <div className='choice_box'>
                <div className='inner_icon'></div>
                <div className='inner_text'>
                  <b>저라면 다른 무드를 선택할래요!</b>
                  <p>Cafe in에 다른 무드를 제안할게요.</p>
                </div>
              </div>
              <div className='choice_box'>
                <div className='inner_icon'></div>
                <div className='inner_text'>
                  <b>제가 알던 정보와 달라요!</b>
                  <p>Cafe in에 표기된 메뉴, 위치정보가 달라요.</p>
                </div>
              </div>
            </div>
        </div>
        <div className='select_mood_container'>
            <div className='select_mood'>
              <button type='button' className='close_btn'></button>
              <div className='choice_icon'></div>
              <p className='choice_text'>선호하는 분위기를<br></br>선택해 주세요!</p>
              <div className='mood_wrap'>
                <div className='mood_box on'>
                  <p>Modern</p>
                  <button type='button'></button>
                </div>
                <div className='mood_box'>
                  <p>Kitsch</p>
                  <button type='button'></button>
                </div>
                <div className='mood_box'>
                  <p>Retro</p>
                  <button type='button'></button>
                </div>
                <div className='mood_box'>
                  <p>Antique</p>
                  <button type='button'></button>
                </div>
                <div className='mood_box'>
                  <p>Vintage</p>
                  <button type='button'></button>
                </div>
                <div className='mood_box'>
                  <p>Industrial</p>
                  <button type='button'></button>
                </div>
                <div className='mood_box'>
                  <p>Houseplants</p>
                  <button type='button'></button>
                </div>
              </div>
              <input type='text' placeholder='기타의견 쓰기'></input>
            </div>
            <button type='button' className='submit_btn'>선택완료</button>
        </div>
        <div className='feedback_container'>
          <div className='feedback'>
            <button type='button' className='close_btn'></button>
            <div className='choice_icon'></div>
            <p className='choice_text'>어떻게 반영하면 좋을까요?</p>
            <input type='text' placeholder='기타의견 쓰기'></input>
          </div>
          <button type='button' className='submit_btn'>입력완료</button>
        </div>
        <div className='notice_container'>
          <div className='notice'>
          <button type='button' className='close_btn'></button>
          <div className='notice_icon'></div>
            <p className='choice_text'>소중한 의견 감사합니다!<br></br>추후 의견 반영 후 수정하겠습니다.</p>
          </div>
        </div>
      </main>
    </div>
  )
}
