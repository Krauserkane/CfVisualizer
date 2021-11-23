const api="https://codeforces.com/api/";
const main=document.querySelector('#main')
const problemlink="https://codeforces.com/problemset/problem/";
document.querySelector('.btn').addEventListener('click',setName);

var handle="";
var problemData;
function setName(e){
    e.preventDefault();
    handle=document.form.username.value;
    
    const searchApi=api+"/user.info?handles="+handle+";";
    //console.log(searchApi);
    axios.get(searchApi).then(data=>{
        showuserInfo(data.data.result[0]);
    })
    .catch(err=>{
        console.log("errorr");
    })
    const sub=api+"/user.status?handle="+handle+"&from=1&count=3000";
    axios.get(sub).then(data=>{
        problemData=data.data.result;
        showProblems(data.data.result);
       topicvis(data.data.result);
    })    
    .catch(err=>{
        console.log("error2");
    })

    
    
    
}

function showuserInfo(data){
    main.innerHTML="";
    const user_info_element=document.createElement('div');
    main.classList.remove('main');
    user_info_element.classList.add('user-info');
    user_info_element.innerHTML=`
     <div class="img"><img src="${data.titlePhoto}" alt="" class="img"></div>
    <div class="info">
        <p>Username:- ${data.handle}</p>
        <p>Rating  :- ${data.rating}</p>
        <p>Max Rating:- ${data.maxRating}</p>
        <p>Friend of user:-${data.friendOfCount}</p>
    </div>
    `;
    main.append(user_info_element);
}


function showProblems(data){
    _800=0;_900=0;_1000=0;_1100=0;_1200=0;_1300=0;_1400=0;_1500=0;_1600=0;_1700=0;_1800=0;_1900=0,_2000=0;
    _ac=0;_tle=0;_wa=0;_total=data.length;
    var myData=data;
    for(var i=0 ;i<data.length;i++){
        if(data[i].verdict=="WRONG_ANSWER"){
            _wa++;
        }
        else  if(data[i].verdict=="TIME_LIMIT_EXCEEDED"){
            _tle++;
        }
        if(data[i].verdict=="OK"){
            _ac++;
            if(data[i].problem.rating==800){
                _800++;
            }
            else if(data[i].problem.rating==900){
                _900++;
            }
            else if(data[i].problem.rating==1000){
                _1000++;
            }
            else if(data[i].problem.rating==1100){
                _1100++;
            }
            else if(data[i].problem.rating==1200){
                _1200++;
            }
            else if(data[i].problem.rating==1300){
                _1300++;
            }
            else if(data[i].problem.rating==1400){
                _1400++;
            }
            else if(data[i].problem.rating==1500){
                _1500++;
            }
            else if(data[i].problem.rating==1600){
                _1600++;
            }
            else if(data[i].problem.rating==1700){
                _1700++;
            }
            else if(data[i].problem.rating==1800){
                _1800++;
            }
            else if(data[i].problem.rating==1900){
                _1900++;
            }
            else if(data[i].problem.rating==2000){
                _2000++;
            }
        }
    }


    document.querySelector(".charts").innerHTML="";
    document.querySelector(".charts").innerHTML=` <canvas id="Chart" width="600" height="120"></canvas><br><br><br><br><br><br><br>
    <canvas id="myChart" width="700" height="200"></canvas>`;

    const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['800', '900', '1000', '1100', '1200', '1300','1400','1500','1600','1700','1800','1900','2000'],
        datasets: [{
            label: 'Problems Solved',
            data: [_800,_900,_1000,_1100,_1200,_1300,_1400,_1500,_1600,_1700,_1800,_1900,_2000],
            backgroundColor: [
                'rgb(128, 128, 128,0.7)',
                'rgb(128, 128, 128,0.7)',
                'rgb(128, 128, 128,0.7)',
                'rgb(128, 128, 128,0.7)',
                'rgb(122, 230, 109,0.7)',
                'rgb(122, 230, 109,0.7)',
                'rgb(104, 228, 228,0.7)',
                'rgb(104, 228, 228,0.7)',
                'rgb(77, 77, 214,0.7)',
                'rgb(77, 77, 214,0.7)',
                'rgb(77, 77, 214,0.7)',
                'rgb(238, 130, 238,0.7)',
                'rgb(238, 130, 238,0.7)'

            ],
            borderColor: [
                'rgb(128, 128, 128,1)',
                'rgb(128, 128, 128,1)',
                'rgb(128, 128, 128,1)',
                'rgb(128, 128, 128,1)',
                'rgb(122, 230, 109,1)',
                'rgb(122, 230, 109,1)',
                'rgb(104, 228, 228,1)',
                'rgb(104, 228, 228,1)',
                'rgb(77, 77, 214,1)',
                'rgb(77, 77, 214,1)',
                'rgb(77, 77, 214,1)',
                'rgb(238, 130, 238,1)',
                'rgb(238, 130, 238,1)'
            ],
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});



    const stats_element=document.createElement('div');
    stats_element.classList.add("table");
    stats_element.innerHTML=`
        <div class="heading">
               <p class="f">Submission</p>
               <p class="s">Count</p> 
            </div>
            <div class="total">
                <p class="f">Total</p>
               <p class="s">${_total}</p> 
            </div>
            <div class="ac">
                <p class="f">Accepted</p>
               <p class="s">${_ac}</p> 
            </div>
           <div class="wa">
            <p class="f">Wrong Answer</p>
            <p class="s">${_wa}</p> 
           </div>
           <div class="tle">
            <p class="f">Time Limit Exceeded</p>
            <p class="s">${_tle}</p>
           </div>
    
    `;
    main.append(stats_element);

   
    
}


function topicvis(data){
    _dp=0;_greedy=0;_maths=0;_graphs=0;_trees=0,_comb=0;_imp=0;_ds=0;_bs=0;
    for(var i=0 ;i<data.length;i++){
        let topic=data[i].problem.tags;
            for(var j=0;j<1;j++){
              
               if(topic[j]=="dp"){
                   _dp++;
                   continue;
               }
               else if(topic[j]=="greedy"){
                   _greedy++;
                    continue;
               }
               else if(topic[j]=="graphs"){
                   _graphs++;
                   continue;
               }
               else if(topic[j]=="maths"){
                   _maths++;
                   continue;
               }
               else if(topic[j]=="trees"){
                   _trees++;
                   continue;
               }
               else if(topic[j]=="combinatorics"){
                   _comb++;
                   continue;
               }
               else if(topic[j]=="implementation"){
                   _imp++;continue;
               }
               else if(topic[j]=="data structures"){
                   _ds++;
                   continue;
               }
               else if(topic[j]=="binary search"){
                   _bs++;
                   continue;
               }
               
              
            }
            
    }

    const ctx = document.getElementById('Chart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['dp','greedy','graphs','trees','binary search','maths','combinatorics','implementation','data structures'],
        datasets: [{
            label: 'Problems Solved',
            data: [_dp,_greedy,_graphs,_trees,_bs,_maths,_comb,_imp,_ds],
            backgroundColor: [
                'rgb(234, 152, 203)',
                'rgb(188, 153, 235)',
                'rgb(153, 159, 235)',
                'rgb(153, 188, 235)',
                'rgb(153, 235, 222)',
                'rgb(153, 235, 195)',
                'rgb(153, 235, 160)',
                'rgb(235, 232, 153)',
                'rgb(235, 192, 153)'

            ],
            borderColor: [
                'rgb(234, 152, 203,1)',
                'rgb(188, 153, 235,1)',
                'rgb(153, 159, 235,1)',
                'rgb(153, 188, 235,1)',
                'rgb(153, 235, 222,1)',
                'rgb(153, 235, 195,1)',
                'rgb(153, 235, 160,1)',
                'rgb(235, 232, 153,1)',
                'rgb(235, 192, 153,1)'
            ],
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

    document.querySelector('.table2').innerHTML="";
    const search_problems_element=document.createElement('div');
    search_problems_element.classList.add('search-problem');
    search_problems_element.innerHTML=` <h3>Search Problems</h3>
    
    <form action="" name="problemForm">
        <label for="">Rating</label>
        <select name="rating" id="rating">
            <option value="all">All</option>
            <option value="800">800</option>
            <option value="900">900</option>
            <option value="1000">1000</option>
            <option value="1200">1200</option>
            <option value="1300">1300</option>
            <option value="1400">1400</option>
            <option value="1500">1500</option>
            <option value="1600">1600</option>
            <option value="1700">1700</option>
            <option value="1800">1800</option>
            <option value="1900">1900</option>
            <option value="2000">2000</option>
        </select>


        <label for="">Tag</label>
        <select name="tag" id="tag">
            <option value="none">none</option>
            <option value="binary search">Binarysearch</option>
            <option value="dp">Dp</option>
            <option value="greedy">Greedy</option>
            <option value="combinatorics">combinatorics</option>
            <option value="graphs">graphs</option>
            <option value="trees">trees</option>
            <option value="maths">maths</option>
            <option value="implementation">implementation</option>
            <option value="data structures">Data structures</option>
        </select>

        <input type="submit" class="problemButton">
    </form>`;
    
   document.querySelector('.table2').append(search_problems_element);
   document.querySelector('.problemButton').addEventListener('click',searchForProblems);
}


function searchForProblems(e){
    e.preventDefault();
    document.querySelector('.display_problems').innerHTML="";
    rating=document.problemForm.rating.value;
    tag=document.problemForm.tag.value;
    let problems=[];
    let links=[];
    console.log(rating,tag);
    if(rating=="all" && tag=="none"){
        return;
    }
    for(var x=0;x<problemData.length;x++){
        if(problemData[x].verdict=="OK"){
            if(problemData[x].problem.rating==rating){
                let topics=problemData[x].problem.tags;
                if(tag=="none" || topics.includes(tag)){
                   problems.push(problemData[x].problem.name);
                   var link_to_problem=problemlink+"/"+problemData[x].problem.contestId+"/"+problemData[x].problem.index;
                   links.push(link_to_problem);
                }
            }
        }
    }
    
    
    let problem_element=document.createElement('div');
    problem_element.classList.add('table2');
    problem_element.innerHTML=` <div class="heading2">
                                <p class="f">Problem Name</p>
                                <p class="s">Link</p>
                                </div>`
    document.querySelector('.display_problems').append(problem_element);
    for(var k=0;k<problems.length;k++){
        let current_problem=document.createElement('div');
        current_problem.classList.add('problem');
        if(k%2!=0){
            current_problem.classList.add('ac');
        }
        current_problem.innerHTML=`<p class="f">${problems[k]}</p>
                                   <a href="${links[k]}"><p class="s">link</p></a>`;

        problem_element.append(current_problem);
    }
}
