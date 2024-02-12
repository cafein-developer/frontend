//여기에 만드시면 됩니다
import './css/listStyle.css';

export default async function ListPage() {
  return (
    <div className='cafe_details'>
      <header>
        <div className='header_top'>
          <h1 className='cafein_logo ir_pm'><a href="#">cafein-logo</a></h1>
          <button type='button' className='m_log'>로그인</button>
        </div>
      </header>
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

        </div>
      </main>
    </div>
  )
}
