const pet ={
    name : '구름',
    eat : function(food){
        alert(this.name+'은/는'+food+'을/를 먹습니다') //this 키워드를 사용해 자신이 가진 속성에 접근할 수 있다.
    }
}
pet.eat('밥')