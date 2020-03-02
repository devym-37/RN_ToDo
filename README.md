# React Native TODO

## Requirements

- [ ] ToDo Item을 클릭시 상세보기 페이지로 넘어감
- [ ] ToDo Item의 내용이 사용 가능한 컨테이너의 최대 영역을 넘어가면 .. 표시
- [ ] React native redux, saga 아키텍처를 적용해서 구현

## API Information

```
GET / todo  : 나의 모든 todo list를 출력 ( get all )

POST / todo :  입력폼에 todo 내용을 입력후 + 를 클릭하면 아이템이 추가  ( create api )

DELETE / todo/${id} : 아이템의 삭제는 메인 또는 상세보기 페이지에서 둘다 가능  ( delete item )

PATCH / todo/${id} : 아이템 상세보기 페이지에서 아이템 내용을 업데이트 가능  ( update item )
```
