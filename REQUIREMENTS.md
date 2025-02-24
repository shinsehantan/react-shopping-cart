## 📝 구현할 기능 목록

### Header 영역

- [x] 라우팅 관련 기능
  - [x] nav bar의 장바구니 버튼을 클릭하면 장바구니 페이지로 이동한다.
  - [x] nav bar의 주문목록 버튼을 클릭하면 주문목록 페이지로 이동한다.
  - [x] WOOWA SHOP 로고를 클릭하면, 상품 목록 페이지로 이동한다.
- [ ] 뒤로가기 버튼을 눌렀을 때, 이전의 상태를 보여준다.

### 상품 목록 페이지

- [ ] 상품별 장바구니 아이콘을 클릭할 수 있다.
  - [ ]'장바구니에 상품이 추가되었습니다.' 스낵바가 뜬다.
  - [x] 장바구니에 추가된다.
  - [ ] 같은 상품에 대해 장바구니 아이콘을 두 번 이상 선택하면, '장바구니에 담은 상품의 수량이 추가되었습니다.' 스낵바가 뜬다.
  - [x] 같은 상품에 대해 장바구니 아이콘을 두 번 이상 선택하면, 장바구니의 수량이 증가한다.
- [x] 상품별 장바구니 아이콘을 클릭하면, Header의 장바구니 아이콘에 물품 기준 담긴 수량이 표시된다.
- [x] 이미지 호버 시, 이미지가 확대된다.
- [x] 페이지는 스크롤이 가능하다.
- [ ] 이미지와 이미지 하단 상품명/가격을 클릭하면 상품 상세 페이지로 이동한다. (2단계)

### 장바구니 페이지

- [x] 처음 장바구니 페이지를 열었을 때, 모든 상품 체크 버튼이 클릭되어 있어야한다.
  - [x] 상단의 버튼에 '선택해제' 문구가 뜬다.
- [ ] 장바구니에 아무것도 없을 경우, 상품을 구매하도록 CTA 버튼을 보여준다.
  - [ ] CTA 버튼을 선택하면 WOOWA SHOP 페이지(상품 목록 페이지)로 이동한다.
- [x] 상품은 최신 추가순으로 나열되어있어야 한다.

- [x] 체크 박스 선택 관련 기능

  - [x] 전체선택이 아닌 경우, 'n개 선택' 문구가 뜬다.
  - [x] 전체선택인 경우, '선택해제' 문구가 뜬다.
  - [x] 장바구니 물품의 개수는 '든든배송 상품(n개)'의 숫자에 반영된다.
  - [x] 주문하기 버튼 속 개수는 선택된 품목의 개수를 나타낸다. (총 수량이 아니다)

- [x] 수량 수정 관련 기능

  - [x] 위아래 버튼을 누르면 숫자가 증가/감소한다.
  - [x] 수량은 최소 1개이다.
  - [x] 위아래 버튼을 누르면 증가/감소한 가격이 상품별 가격에 반영된다.
  - [x] 위아래 버튼을 누르면 증가/감소한 가격이 전체 결제예상금액에 반영된다.

- [ ] 삭제 관련 기능
  - [ ] 휴지통 버튼을 누르면 '해당 상품을 삭제하시겠습니까?' confirm창이 뜬다.
  - [ ] 상품 일부를 선택한 후, 상품삭제 버튼을 누르면 '선택한 n개의 상품을 삭제하시겠습니까?' confirm창이 뜬다.
  - [ ] 전체 상품을 선택한 후, 상품삭제 버튼을 누르면 '장바구니의 모든 상품을 삭제하시겠습니까' confirm 창이 뜬다. (api는 없을 예정)
  - [x] 스크롤을 내릴 때, 결제예상금액 floating box가 같이 이동한다.
  - [x] 주문하기 버튼을 선택하면, 주문/결제 페이지로 이동한다.
  - [ ] 이미지와 이미지 옆 상품명/가격을 클릭하면 상품 상세 페이지로 이동한다. (2단계)

### 주문/결제 페이지

- [x] 상품은 최신 추가순으로 나열되어있어야 한다.
- [x] 사용자는 총 결제 금액을 확인할 수 있다.
- [x] 사용자는 상품별 구매하고자하는 개수와 상품의 이미지, 상품명을 확인할 수 있다.
- [x] 스크롤을 내릴 때, 결제금액 floating box가 같이 이동한다.
- [x] 주문 상품(n건) 문구에 상품개수가 반영되어 있어야 한다.
- [x] 결제하기 버튼을 선택하면, 장바구니에서 결제된 상품이 삭제된다.
- [x] 결제하기 버튼을 선택하면(장바구니에서 결제된 상품이 삭제되는 순간) header의 장바구니에도 상품 숫자가 반영된다.
- [x] 결제하기 버튼을 선택하면 (결제가 되고) 주문 목록 페이지로 이동한다.

### 주문 목록 페이지 (심화 미션)

- [ ] 상품은 최신 추가순으로 나열되어있어야 한다.
- [ ] 최근 주문한 상품 목록이 1번이 되어 상단에 추가된다.
- [ ] 이전 주문한 상품 목록은 n+1번이 되어 하단으로 밀린다.
- [ ] 장바구니 버튼을 처음 클릭하면, '장바구니에 상품이 추가되었습니다.' 스낵바가 뜬다.
- [ ] 장바구니 버튼을 2번 이상 클릭하면, '장바구니에 담은 상품의 수량이 추가되었습니다.' 스낵바가 뜬다.
- [ ] 상품 이미지와 상품명/가격을 클릭하면, 상품 상세페이지로 이동한다.
- [ ] 주문한 물품 우측의 장바구니 버튼을 선택하면, 해당 물품이 장바구니에 추가되고 nav bar의 장바구니 버튼에도 반영이 된다.
- [ ] 상세보기 버튼을 선택하면, 주문 목록 상세 페이지로 이동한다.
