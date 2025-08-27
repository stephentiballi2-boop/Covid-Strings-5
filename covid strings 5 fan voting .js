<doctype.html>
<html lang en>
<script>
<header.html>
heading for heading variables 
the heading numbers that determine where each heading and subheading go 
heading1=fan voting rounds
heading2=string voting
heading3=result
heading4=non-concatenated string variables
heading5=concatenated string variables
heading6=second round
heading7=third round
heading8=fourth round
heading9=fifth round
subheading1=covid strings first round matchups
subheading2=first round non-concatenated string advancing
subheading3=first round concatenated string advancing
subheading4=second  round non-concatenated string advancing
subheading5=second round concatenated string advancing
subheading6=third round non-concatenated string advancing
subheading7=third round concatenated string advancing
subheading8=fourth round non-concatenated string advancing
subheading9=fourth round concatenated string advancing
subheading10=covid strings fan voting victory
filename=covid strings5 fan voting.js
<meta charset utf-8>
<meta name “viewport” content=”width=device-width,initial scale 1>
<title covid strings5 fan voting</title>
<style>
vote button
margin:5px;
padding:10px;
background-color:4caf50
color:white;
border:none;
cursor:pointer;
vote button.hover
background color 45a049
</style>
</head>
<header.html>
fan voting rounds
the number of rounds overall in covid strings fan voting
total entry limit=32
non-concatenated string limit=16
concatenated string  limit=16
amount of rounds=math.log(entry limit) /math.log(2) 
for (i=amount_ of_ rounds;-i>0;i- -)
s=round+(amount_ of_ rounds;i+1)+’ of amount_ of_ rounds consist of ‘math.pow(2,I-1)+ matches’;
<h1 vote for your favorite string>
<header.html>
string voting
the processes by which a user votes for their favorite string
<button class=vote button on click “vote” (‘string 1’) <string pair button>
<button class=vote button on click “vote” (‘string 2’) <string pair button>
<button class=vote button on click “vote” (‘string 3’) <string pair button>
<button class=vote button on click “vote” (‘string 4’) <string pair button>
<button class=vote button on click “vote” (‘string 5’) <string pair button>
<button class=vote button on click “vote” (‘string 6’) <string pair button>
<button class=vote button on click “vote” (‘string 7’) <string pair button>
<button class=vote button on click “vote” (‘string 8’) <string pair button>
<button class=vote button on click “vote” (‘string 9’) <string pair button>
<button class=vote button on click “vote” (‘string 10’) <string pair button>
<button class=vote button on click “vote” (‘string 11’) <string pair button>
<button class=vote button on click “vote” (‘string 12’) <string pair button>
<button class=vote button on click “vote” (‘string 13’) <string pair button>
<button class=vote button on click “vote” (‘string 14’) <string pair button>
<button class=vote button  on click “vote” (‘string 15’) <string pair button>
<button class=vote button  on click “vote” (‘string 16’) <string pair button>
<header.html>
first round
the first round in covid strings fan voting
render round
roundcontainer.innerhtml=<h1 round {first round} <h1>
candidates foreach((candidate,index)
candidatediv.innerhtml
<p> {candidate name } {candidate votes} votes </p>
<button on click= “vote {index} >”vote for {candidate name}</button>
round container.appendchild(candidatediv)
add event listener (‘dom  content loaded ,()
let current round=1
total rounds= 5
round container=document.get element by id(‘round-container’)
nextroundbutton=document.get element by id(‘next-round’)
window open 
window vote function(index)
candidates [index] votes++
commence round .addeventlistener(click)
if current round ==round 1:
commence round 1
else:
remain 
<subheading.html>
covid strings first round matchups
the matchups that appear in the first round of covid strings fan voting 
<div class=”matchup” 
non-concatenated strings
matchup1=string 8 vs string 9
<button id vote string 8 “vote for string 8” </button>
<button id vote string 9 “vote for string 9” </button>
<div class =”results”>
<p> string 8 <span id= “votes string 8 >0</span> votes <p>
<p> string 9 <span id= “votes string 9 >0</span> votes <p>
<div>
matchup2=string 6 vs string 11
<button id vote string 6 “vote for string 6” </button>
<button id vote string 11 “vote for string 11” </button>
<div class =”results”>
<p> string 6 <span id= “votes string 6 >0</span> votes <p>
<p> string 11 <span id= “votes string 11 >0</span> votes <p>
<Div>
matchup3=string 3 vs string 14
<button id vote string 3 “vote for string 3” </button>
<button id vote string 14 “vote for string 14” </button>
<div class =”results”>
<p> string 3 <span id= “votes string 3 >0</span> votes <p>
<p> string 14 <span id= “votes string 14 >0</span> votes <p>
<div>
matchup4=string 7 vs string 10
<button id vote string 7 “vote for string 7” </button>
<button id vote string 10 “vote for string 10” </button>
<div class =”results”>
<p> string 7 <span id= “votes string 7 >0</span> votes <p>
<p> string 10 <span id= “votes string 10 >0</span> votes <p>
<Div>
matchup5=string 1 vs string 16
<button id vote string 1 “vote for string 1” </button>
<button id vote string 16 “vote for string 16” </button>
<div class =”results”>
<p> string 1 <span id= “votes string 1 >0</span> votes <p>
<p> string 16 <span id= “votes string 16 >0</span> votes <p>
<div>
matchup6=string 5 vs string 12
<button id vote string 5 “vote for string 5” </button>
<button id vote string 12 “vote for string 12” </button>
<div class =”results”>
<p> string 5 <span id= “votes string 5 >0</span> votes <p>
<p> string 12 <span id= “votes string 12 >0</span> votes <p>
<div>
matchup7=string 2 vs string 15
<button id vote string 2 “vote for string 2” </button>
<button id vote string 15 “vote for string 15” </button>
<div class =”results”>
<p> string 2 <span id= “votes string 2 >0</span> votes <p>
<p> string 15 <span id= “votes string 15 >0</span> votes <p>
<div>
matchup8=string 4 vs string 13
<button id vote string 4 “vote for string 4” </button>
<button id vote string 13 “vote for string 13” </button>
<div class =”results”>
<p> string 4 <span Id= “votes string 4 >0</span> votes <p>
<p> string 13 <span id= “votes string 13 >0</span> votes <p>
<div>
<div class=”matchup” 
concatenated strings 
matchup1=string 4 vs string 13
<button id vote string 4 “vote for string 4” </button>
<button id vote string 13 “vote for string 13” </button>
<div class =”results”>
<p> string 4 <span id= “votes string 4 >0</span> votes <p>
<p> string 13 <span id= “votes string 13 >0</span> votes <p>
<div>
matchup2=string 1 vs string 16
<button id vote string 1 “vote for string 1”  </button>
<button id vote string 16 “vote for string 16” </button>
<div class =”results”>
<p> string 1 <span id= “ votes string 1 >0</span> votes <p>
<p> string 16 <span id= “votes string 16 >0</span> votes <p>
<div>
matchup3=string 7 vs string 10
<button id vote string 7 “vote for string 7” </button>
<button id vote string 10 “vote for string 10” </button>
<div class =”Results”>
<p> string 7 <span id= “votes string 7 >0</span> votes <p>
<p> string 10 <span id= “votes string 10 >0</span> votes <p>
<div>
matchup4=String 3 vs string 14
<button id vote string 3 “vote for string 3” </button>
<button id vote string 14 “vote for string 14” </button>
<div class =”results”>
<p> string 3 <span id= “votes string 3 >0</span> votes <p>
<p> string 14 <span id= “votes string 14 >0</span> votes <p>
<div>
matchup5=string 8 vs string 9
<button id vote string 8 “vote for string 8” </button>
<button id vote string 9 “vote for string 9” </button>
<div class =”results”>
<p> string 8 <span id= “votes string 8 >0</span> votes <p>
<p> string 9 <span id= “votes string 9 >0</span> votes <p>
<div>
matchup6=string 5 vs string 12
<button id vote string 5 “vote for string 5” </button>
<button id vote string 12 “vote for string 12” </button>
<div class =”Results”>
<p> string 5 <span id= “votes string 5 >0</span> votes <p>
<p> string 12 <span id= “votes string 12 >0</span> votes <p>
<div>
matchup7=string 2 vs string 15
<button id vote string 2 “vote for string 2” </button>
<button id vote string 15 “vote for string 15” </button>
<div class =”results”>
<p> string 2 <span id= “votes string 2 >0</span> votes <p>
<p> string 15 <span id= “votes string 15 >0</span> votes <p>
<div>
matchup8=string 6 vs string 11
<button id vote string 6 “vote for string 6” </button>
<button id vote string 11 “vote for string 11” </button>
<div class =”results”>
<p> string 6 <span id= “votes string 6 >0</span> votes <p>
<p> string 11 <span id= “votes string 11 >0</span> votes <p>
<div>
<h2 id =”result”></h2>
<header.html>
result
the end result of voting on a particular pair of strings
<script src=”vote.js”>
<script>
<body>
<html>
vote js file notes:
votes={
‘string 1
‘string 2’
vote (string)
if (votes.hasownproperty(character))
votes [character]++
display results
else:
console.error(‘invalid string’)
displayresults
result element=document get element by id (‘result’)
result element inner html
<header.html>
non-concatenated string variables 
non-concatenated strings in covid strings
non-concatenated strings List=[1:phrase “some more good news on work from home involves the energy impact”,2:phrase “one real aspect of the covid pandemic was the covid high five”, 3:phrase “this helps deal with the whole quarantined at home narrative”, 3:phrase “the abbreviation of covid racing experience is not crx”, 4:phrase ”another bit of good news involves increased efficiency and productivity”, 6:phrase “it should also decrease ones “level of concern” that working from home means doing nothing”, 7:phrase “the bad news is that the ba286 variant is causing an increase in hospitalizations”,8:math problem “if gordon chang had 3 warnings that china was not done with deadly viruses post covid and it took 36 months before the first report of a new virus was detected if he issued a warning once every 6 months how long did the cycle go for?”, 9:math problem “if after 18 months newsweek said your warnings smack too much like a boy who cried wolf scenario if gordon chang stopped publishing his warnings 3 months after newsweeks notice how much time was lost?”,10:math problem “if a study says that work from home has reduced greenhouse gas emissions by 60 percent and the number of people who support work from home overall is 80 percent how many people are supporting work from home because of greenhouse gas reduction if 43 percent say it is not their top concern?”, 11:math problem “if a poll found that 67 percent say if they had the option to work remotely they would take it how many wouldnt?”, 12:math problem “if the poll’s margin of error is 1.25 percent what is the range?”, 13:math problem “if 9 percent of nos knew that working from home was flexible for them they would be open to working remotely what is the new percent?”, 14:math problem “if 70 percent said the work from home experience is something they would not forget is it a supermajority?”, 15:sentence“it does not matter what reason you work from home people know somethings different”, 16:sentence “no work from home does not mean youre less productive”  ]
non-concatenated string1=phrase “some more good news on work from home involves the energy impact”
non-concatenated string2=phrase “one real aspect of the covid pandemic was the covid high five”
non-concatenated string3=phrase “this helps deal with the whole quarantined  at home narrative”
non-concatenated string4=phrase “the abbreviation of covid racing experience is not crx”
non-concatenated string5=phrase ”another bit of good news involves increased efficiency and productivity”
non-concatenated string6=phrase “it should also decrease ones “level of concern” that working from home means doing nothing”
non-concatenated string7=phrase “the bad news is that the ba286 variant is causing an increase in hospitalizations”
non-concatenated string8=math problem “if gordon chang had 3 warnings that china was not done with deadly viruses post covid and it took 36 months before the first report of a new virus was detected if he issued a warning once every 6 months how long did the cycle Go For?”
non-concatenated string9=math problem “if after 18 months newsweek said your warnings smack too much like a boy who cried wolf scenario if gordon chang stopped publishing his warnings 3 months after newsweeks notice how much time was lost?”
non-concatenated string10=math problem :math problem “if a study says that work from home has reduced greenhouse gas emissions by 60 percent and the number of people who support work from home overall is 80 percent how many people are supporting work from home because of greenhouse gas re
non-concatenated string11=math problem “if a poll found that 67 percent say if they had the option to work remotely they would take it,how many wouldnt?”
non-concatenated string12=math problem “if the polls margin of error is 1.25 percent what is the range?”
non-concatenated string13=math problem “if 9 percent of nos knew that working from home was flexible for them they would be open to working remotely what is the new percent?”
non-concatenated string14=math problem “if 70 percent said the work from home experience is something they would not forget is it a supermajority?”
non-concatenated string15=sentence “it does not matter what reason you work from home people know somethings different”
non-concatenated string16=sentence “no work from home does not mean youre less productive”
chapter=document.queryselector(chapter)
chapter inner html
replace ‘ with / 
for apostrophe in covid strings5 fan voting
select characters
edit diffuse property
desired color=green
<p>string 1[votes ‘string 1 ‘]}votes</p>
<p>string 2[votes ‘string 2 ‘]}votes</p>
<p>string 3 [votes ‘string 3 ‘]}votes</p>
<p>string 4 [votes ‘string 4 ‘]}votes</p>
<p>string 5[votes ‘string 5 ‘]}votes</p>
<p>string 6[votes ‘string 6 ‘]}votes</p>
<p>string 7 [votes ‘string 7 ‘]}votes</p>
<p>string 8[votes ‘string 8 ‘]}votes</p>
<p>string 9 [votes ‘string 9 ‘]}votes</p>
<p>string 10 [votes ‘string 10 ‘]}votes</p>
<p>string 11[votes ‘string 11 ‘]}votes</p>
<p>string 12 [votes ‘string 12 ‘]}votes</p>
<p>string 13 [votes ‘string 13 ‘]}votes</p>
<p>string 14 [votes ‘string 14 ‘]}votes</p>
<p>string 15 [votes ‘string 15 ‘]}votes</p>
<p>string 16 [votes ‘string 16 ‘]}votes</p>
<subheading.html>
first round non-concatenated string advancing 
the code designed to advancing winning non-concatenated strings 
advance to next round (strings to advance)
sorted strings=(strings.sort(string1,string2) string 1 votes string 2 votes)
advancing strings=sorted strings.slice(0,num to 8)
return advancing strings 
if result matchup1>=.5
if result matchup2>=.5
if result matchup3>=.5
if result matchup4>=.5
if result matchup5>=.5
if result matchup6>=.5
if result matchup7>=.5
if result matchup8>=.5
<header.html>
concatenated string Variables
concatenated strings in covid strings
concatenated string list=[1:phrase “one”+”not”+”so”+”real”+”aspect”+”of”+"the”+”pandemic”+”was”+”tangible”+”proof”+”of”+”trump”+”and”+”dr.fauci”+”hugging”, 2:math problem “if”+”a”+”poll”+”found”+”that”+”67”+”percent”+”of”+”americans”+”support”+”the”+”idea”+”that”+”making”+”sure”+”people”+”get”+”vaccinated”+”against”+”The”+”Tripledemic”+”Is”+”Important”+”If”+”The”+”Same”+”Poll”+”Says”+”Those”+”Who”+”Might”+”Get”+”Overloaded”+”Is”+”23”+”Percent”+”What”+”Is”+”The”+”New”+”Percent?”,3:math problem “If”+”Four”+”Fifths”+”Of”+”Respondents”+”Said”+”That”+”If”+”A”+”Surge”+”Happened”+”In”+”Their”+”Community”+”They”+”Would”+”Reconsider”+”Their”+”Fatigue”+”What”+”Is”+”The”+”New”+”Percent?”, 4:math problem  “If”+”90”+”Percent”+”Of”+”23”+”Percent”+”Say”+”They”+”Will”+”Get”+”Vaccinated”+”If”+”at”+”least”+”one”+”friend”+”recommends”+”it”+”what”+”would”+”the”+”new”+”percent”+”of”+”people”+”worn”+”out”+”be?”,5:phrase “the”+”next”+”version”+”involves”+”the”+”eris”+”variant”, 6:phrase “another”+”concern”+”is”+”that”+”china”+”might”+”have”+”a”+”worse”+”virus”+”up”+”its”+”sleeve”,7:phrase “this”+”should”+”step”+”up”+”efforts”+”to”+”prepare”+”for”+”the”+”next”+”pandemic”, 8:phrase “hv1”+”is”+”also”+”a”+”potential”+”threat”, 9:math problem “if”+”a”+”poll”+”found”+”that”+”75”+”percent”+”of”+”people”+”agreed”+”that”+”vaccines”+”do”+”not”+”cause”+”heart”+”conditions”+”if”+”said”+”poll”+”showed”+”new”+”research”+”increases”+”agreement”+”by”+”3”+”percent”+”what”+”is”+”the”+”new”+”percent?”, 10:math problem “a”+”new”+”report”+”claims”+”covid”+”was”+”circulating”+”in”+”europe”+”as”+”far”+”back”+”as”+”september”+”how”+”much”+”lag”+”time”+”was”+”there?”, 11:phrase “in”+”reality”+”it”+”is”+”based”+”on”+”some”+”factors”+”that”+”policymakers”+”can”+”not”+”control”, 12:math problem “a”+”new”+”map”+”says”+”that”+”the”+”highest”+”probability”+”for"+"covid”+”infection”+”is”+”in”+”the”+”northeast”+”with”+”an”+”average”+”rate”+”of”+”15%”+”if”+”the”+”national”+”rate”+”is”+”12.5%”+”what”+”is”+”the”+”difference?” 13:math problem “if”+”reporting”+”shows”+”that”+”covid”+”was”+”spreading”+”2+”weeks”+”earlier”+”than”+”previously”+”reported”+”when”+”should”+”the”+”whistle”+”have”+”been”+”blown?”,14:phrase “when”+”it”+”comes”+”to”+”inflation”+”joe”+”biden”+”is”+”not”+”to”+”blame”, 15:math problem “a”+”study”+”suggest”+”covid”+”was”+”in”+”america”+”as”+”early”+”december”+”2019”+”if”+”the”+”first”+”offical”+”cases”+”were”+”not”+”reported”+”until”+”feburary”+”2020”+”how”+”much”+”lag”+”time”+”existed?”,16:phrase “even”+”if”+”the”+”most”+”likely”+”scenario”+”is”+”proven”+”that”+”is”+”still”+”cause”+”for”+”concern”
concatenated string1=phrase “one”+”not”+”so”+”real”+”aspect”+”of”+”the”+”pandemic”+”was”+”tangible”+”proof”+”of”+”trump”+”and”+”dr.fauci”+”hugging”
concatenated string2=math problem “if”+”a”+”poll”+”found”+”that”+”67”+”percent”+”of”+”americans”+”support”+”the”+”idea”+”that”+”making”+”sure”+”people”+”get”+”vaccinated”+”against”+”the”+”tripledemic”+”is”+”important”+”if”+”the”+”same”+”poll”+”says”+”those”+”who”+”might”+”get”+”overloaded”+”is”+”23”+”percent”+”what”+”is”+”the”+”new”+”percent?”
concatenated string3=math problem “if”+”four”+”fifths”+”of”+”respondents”+”said”+”that”+”if”+”a”+”surge”+”happened”+”in”+”their”+”community”+”they”+”would”+”reconsider”+”their”+”fatigue”+”what”+”is”+”the”+”new”+”percent?”
concatenated string4=math problem  “if”+”90”+”percent”+”of”+”23”+”percent”+”say”+”they”+”will”+”get”+”vaccinated”+”if”+”at”+”least”+”one”+”friend”+”recommends”+”it”+”what”+”would”+”the”+”new”+”percent”+”of”+”people”+”worn”+”out”+”be?”
concatenated string5=phrase “the”+”next”+”version”+”involves”+”the”+”eris”+”variant”
concatenated string6=phrase “another”+”concern”+”is”+”that”+”china”+”might”+”have”+”a”+”worse”+”virus”+”up”+”its”+”sleeve”
concatenated string7=phrase “this”+”should”+”step”+”up”+”efforts”+”to”+”prepare”+”for”+”the”+”next”+”pandemic”
concatenated string8=phrase “hv1”+”is”+”also”+”a”+”potential”+”threat”
concatenated string9=math problem “if”+”a”+”poll”+”found”+”that”+”75”+”percent”+”of”+"people”+”agreed”+”that”+”vaccines”+”do”+”not”+”cause”+”heart”+”conditions”+”if”+”said”+”poll”+”showed”+”new”+”research”+”increases”+”agreement”+”by”+”3”+”percent”+”what”+”is”+”the”+”new”+”percent?”
concatenated string10=math problem “a”+”new”+”report”+”claims”+”covid”+”was”+”circulating”+”in”+”europe”+”as”+”far”+”back”+”as”+”september”+”how”+”much”+”lag”+”time”+”was”+”there?”
concatenated string11=phrase “in”+”reality”+”it”+”is”+”based”+”on”+”some”+”factors”+”that”+”policymakers”+”can”+”not”+”control”
concatenated string12=math problem “A”+”New”+”Map”+”Says”+”That”+”The”+”Highest”+”Probability”+”For’+”Covid”+”Infection”+”Is”+”In”+”The”+”Northeast”+”With”+”An”+”Average”+”Rate”+”Of”+”15%”+”If”+”The”+”National”+”Rate”+”Is”+”12.5%”+”What”+”Is”+”The”+”Difference?” 
concatenated string13=math problem “If”+”Reporting”+”Shows”+”That”+”Covid”+”Was”+”Spreading”+”2+”Weeks”+”Earlier”+”Than”+”Previously”+”Reported”+”When”+”Should”+”The”+”Whistle”+”Have”+”Been”+”Blown?”
concatenated string14=phrase“when”+”It”+”Comes”+”To”+”Inflation”+”Joe”+”Biden”+”Is”+”Not”+”To”+”Blame”
concatenated string15=math problem “A”+”Study”+”Suggest”+”Covid”+”Was”+”In”+”America”+”As”+”Early”+”December”+”2019”+”If”+”The”+”First”+”Offical”+”Cases”+”Were”+”Not”+”Reported”+”Until”+”Feburary”+”2020”+”How”+”Much”+”Lag”+”Time”+”Existed?”
concatenated string16=phrase “Even”+”If”+”The”+”Most”+”Likely”+”Scenario”+”Is”+”Proven”+”That”+”Is”+”Still”+”Cause”+”For”+”Concern”
Chapter= Document.Queryselector(Chapter)
Chapter Inner Html
Replace ‘ With / 
For Apostrophe In Covid Strings5Fan Voting
Select Characters
Edit Diffuse Property
Desired Color=Green
<P>String 1[Votes ‘String 1 ‘]}Votes</P>
<P>String 2[Votes ‘String 2 ‘]}Votes</P>
<P>String 3 [Votes ‘String 3 ‘]}Votes</P>
<P>String 4 [Votes ‘String 4 ‘]}Votes</P>
<P>String 5[Votes ‘String 5 ‘]}Votes</P>
<P>String 6[Votes ‘String 6 ‘]}Votes</P>
<P>String 7 [Votes ‘String 7 ‘]}Votes</P>
<P>String 8[Votes ‘String 8 ‘]}Votes</P>
<P>String 9 [Votes ‘String 9 ‘]}Votes</P>
<P>String 10 [Votes ‘String 10 ‘]}Votes</P>
<P>String 11[Votes ‘String 11 ‘]}Votes</P>
<P>String 12 [Votes ‘String 12 ‘]}Votes</P>
<P>String 13 [Votes ‘String 13 ‘]}Votes</P>
<P>String 14 [Votes ‘String 14 ‘]}Votes</P>
<P>String 15 [Votes ‘String 15 ‘]}Votes</P>
<P>String 16 [Votes ‘String 16 ‘]}Votes</P>
<Subheading.Html>
First Round  Concatenated String Advancing 
The Code Designed To Advancing Winning Concatenated Strings 
Advance To Next Round (Strings To Advance)
Sorted Strings=(Strings.Sort(String1,String2) Strings 1 Votes String 2 Votes)
Advancing Strings=Sorted Strings.Slice(0,Num To 8)
Return Advancing Strings 
Percentage Calculator
Part=Number Of Votes Per Day In Round 
Whole= Total Number Of Votes For String
Calculate {Part,Whole}
Return (Part/Whole)*100
Display (Part,Whole)
Percentage=This.Calculate(Part,Whole)
Return {Part} Is {Percentage} Of {Whole}
Result=PercentageCalculator.Display()
Console Log Result 
If Result Matchup1>=.5
If Result Matchup2>=.5
If Result Matchup3>=.5
If Result Matchup4>=.5
If Result Matchup5>=.5
If Result Matchup6>=.5
If Result Matchup7>=.5
If Result Matchup8>=.5
NewWindow=Window.Open(Current Round)
CurrentRound=First Round
Window.Close(Current Round)
Window.Vote =Function(Index)
Candidates [Index] Votes++;
Next Round Button.AddEventListener(‘Click’,()
If(CurrentRound <TotalRounds)
CurrentRound++
Else:
Alert(‘Voting Has Ended)
If NextRoundButton.Disabled=True
Conclude Voting For  First Round
<Header.Html>
Second Round
The Second Round Of Fan Voting
Render Round
RoundContainer.InnerHtml=<H2 Round {Second Round} <H2>
Candidates ForEach((Candidate,Index)
CandidateDiv.Innerhtml
<P> {Candidate Name } {Candidate Votes} Votes </P>
<Button On Click= “Vote {Index} >”Vote For {Candidate Name} </Button>
Round Container.AppendChild(CandidateDiv)
Add Event Listener (‘Dom Content Loaded)
Let Current Round=Round2
Total Rounds= 5
Round Container=Document.Get Element By Id(‘Round-Container’)
NextRoundButton=Document.Get Element By Id(‘Next-Round’)
Window Open 
Window Vote Function (Index)
Candidates [Index] Votes++
Commence Round .AddEventListener(Click)
If Current Round ==Round 2:
Commence Round 2
Else:
Remain 
String Numbers[Non-Concatenated Strings :Name ‘String Pair1’ Votes 
Name: ‘String Pair2’ Votes
Name: ‘String Pair3’ Votes
Name:’String Pair4’ Votes
String Numbers[Concatenated Strings : Name ‘String Pair1’ Votes 
Name: ‘String Pair 2’ Votes
Name: ‘String Pair3’ Votes
Name:’String Pair4’ Votes
<Subheading.Html>
Second Round Non-Concatenated String Advancing 
The Code Designed To Advancing Winning Non-Concatenated Strings 
Advance To Next Round (Strings To Advance)
Sorted Strings=(Strings.Sort(String1,String2) Strings 1 Votes String 2 Votes)
Advancing Strings=Sorted Strings.Slice(0,Num To 4)
Percentage Calculator
Part=Number Of Votes Per Day In Round 
Whole= Total Number Of Votes For String
Calculate {Part,Whole}
Return (Part/Whole)*100
Display (Part,Whole)
Percentage=This.Calculate(Part,Whole)
Return {Part} Is {Percentage} Of {Whole}
Result=PercentageCalculator.Display()
Console Log Result 
Return Advancing Strings 
If Result Matchup1>=.5
If Result Matchup2>=.5
If Result Matchup3>=.5
If Result Matchup4>=.5
Concatenated Strings 
Name String1 Votes
Name String2 Votes
Name String3 Votes
Name String4 Votes
Name String5 Votes
Name String6 Votes
Name String7 Votes
Name String8 Votes
<Subheading.Html>
Second Round Concatenated String Advancing 
Advance To Next Round (Strings To Advance)
Sorted Strings=(Strings.Sort(String1,String2) Strings 1 Votes String 2 Votes)
Advancing Strings=Sorted Strings.Slice(0,Num To 4)
Return Advancing Strings
Percentage Calculator
Part=Number Of Votes Per Day In Round 
Whole= Total Number Of Votes For String
Calculate {Part,Whole}
Return (Part/Whole)*100
Display (Part,Whole)
Percentage=This.Calculate(Part,Whole)
Return {Part} Is {Percentage} Of {Whole}
Result=PercentageCalculator.Display()
Console Log Result  
If Result Matchup1>=.5
If Result Matchup2>=.5
If Result Matchup3>=.5
If Result Matchup4>=.5
NewWindow=Window.Open(Current Round)
CurrentRound=First Round
Window.Close(Current Round)
Window.Vote =Function(Index)
Candidates [Index] Votes++;
Next Round Button.AddEventListener(‘Click’,()
If(CurrentRound <TotalRounds)
CurrentRound++
Else:
Alert(‘Voting Has Ended)
If NextRoundButton.Disabled=True
Conclude Voting For  Second Round
<Header.Html>
Third Round
The Third Round Of Fan Voting
Render Round
RoundContainer.InnerHtml=<H3 Round {Third Round} <H3>
Candidates ForEach((Candidate,Index)
CandidateDiv.Innerhtml
<P> {Candidate Name } {Candidate Votes} Votes </P>
<Button On Click= “Vote {Index} >”Vote For {Candidate Name} </Button>
Round Container.AppendChild(CandidateDiv)
Add Event Listener (‘Dom Content Loaded)
Let Current Round=Round3
Total Rounds= 5
Round Container=Document.Get Element By Id(‘Round-Container’)
NextRoundButton=Document.Get Element By Id(‘Next-Round’)
Window Open 
Window Vote Function (Index)
Candidates [Index] Votes++
Commence Round .AddEventListener(Click)
If Current Round ==Round 3:
Commence Round 3
Else:
Remain 
String Numbers[Non-Concatenated Strings :Name  ‘String Pair1’ Votes 
Name: ‘String Pair2’ Votes
String Numbers[Concatenated Strings : Name  ‘String Pair1’ Votes 
Name: ‘String Pair2’ Votes
<Subheading.Html>
Third Round Non-Concatenated String Advancing 
The Code Designed To Advancing Winning Non-Concatenated Strings 
Advance To Next Round (Strings To Advance)
Sorted Strings=(Strings.Sort(String1,String2) Strings 1 Votes String 2 Votes)
Advancing Strings=Sorted Strings .Slice(0,Num To 2)
Return Advancing Strings
Percentage Calculator
Part=Number Of Votes Per Day In Round 
Whole= Total Number Of Votes For String
Calculate {Part,Whole}
Return (Part/Whole)*100
Display (Part,Whole)
Percentage=This.Calculate(Part,Whole)
Return {Part} Is {Percentage} Of {Whole}
Result=PercentageCalculator.Display()
Console Log Result  
If Result Matchup1>=.5
If Result Matchup2>=.5
Name String1 Votes
Name String2 Votes
Name String3 Votes
Name String4 Votes
<Subheading.Html>
Third Round Concatenated String Advancing 
The Code Designed To Advancing Winning Concatenated Strings 
Advance To Next Round (Strings To Advance)
Sorted Strings=(Strings.Sort(String1,String2) Strings 1 Votes String 2 Votes)
Advancing Strings=Sorted Strings.Slice(0,Num To 2)
Return Advancing Strings 
Percentage Calculator
Part=Number Of Votes Per Day In Round 
Whole= Total Number Of Votes For String
Calculate {Part,Whole}
Return (Part/Whole)*100
Display (Part,Whole)
Percentage=This.Calculate(Part,Whole)
Return {Part} Is {Percentage} Of {Whole}
Result=PercentageCalculator.Display()
Console Log Result 
If Result Matchup1>=.5
If Result Matchup2>=.5
NewWindow=Window.Open(Current Round)
Window.Close(Current Round)
Window.Vote =Function(Index)
Candidates [Index] Votes++;
Next Round Button.AddEventListener(‘Click’,()
If(CurrentRound <TotalRounds)
CurrentRound++
Else:
Alert(‘Voting Has Ended)
If NextRoundButton.Disabled=True
Conclude Voting For Third Round 
<Header.Html>
Fourth Round
The Fourth Round Of Fan Voting
Render Round
RoundContainer.InnerHtml=<H4 Round {Fourth Round} <H4>
Candidates ForEach((Candidate,Index)
CandidateDiv.Innerhtml
<P> {Candidate Name } {Candidate Votes} Votes </P>
<Button On Click= “Vote {Index} >”Vote For {Candidate Name}</Button>
Round Container.AppendChild(CandidateDiv)
Add Event Listener (‘Dom Content Loaded)
Let Current Round=ROUND4
Total Rounds=5
Round Container=Document.Get Element By Id(‘Round-Container’)
NextRoundButton=Document.Get Element By Id(‘Next-Round’)
String Numbers[Non-Concatenated Strings : Name ‘String Pair1’ Votes 
String Numbers[Concatenated Strings :Name ‘String Pair1’ Votes 
Name String1 Votes
Name String2 Votes 
<Subheading.Html>
Fourth Round Non-Concatenated String Advancing 
The Code Designed To Advancing Winning Non-Concatenated Strings 
Advance To Next Round (Strings To Advance)
Sorted Strings=(Strings.Sort(String1,String2)Strings 1 Votes String 2 Votes)
Advancing Strings=Sorted Strings.Slice( Last Concatenated String Last Non-Concatenated String )
Return Advancing Strings 
Percentage Calculator
Part=Number Of Votes Per Day In Round 
Whole= Total Number Of Votes For String
Calculate {Part,Whole}
Return (Part/Whole)*100
Display (Part,Whole)
Percentage=This.Calculate(Part,Whole)
Return {Part} Is {Percentage} Of {Whole}
Result=PercentageCalculator.Display()
Console Log Result 
If Result Matchup1>=.5
Name String1 Votes
Name String2 Votes
<Subheading.Html>
Fourth Round Concatenated String Advancing 
The Code Designed To Advancing Winning Concatenated Strings 
Advance To Next Round (Strings To Advance)
Sorted Strings=(Strings.Sort(String1,String2) Strings 1 Votes String 2 Votes)
Advancing Strings=Sorted Strings.Slice( Last Concatenated String Last Non-Concatenated String)
Return Advancing Strings 
Percentage Calculator
Part=Number Of Votes Per Day In Round 
Whole= Total Number Of Votes For String
Calculate {Part,Whole}
Return (Part/Whole)*100
Display (Part,Whole)
Percentage=This.Calculate(Part,Whole)
Return {Part} Is {Percentage} Of {Whole}
Result=PercentageCalculator.Display()
Console Log Result 
If Result Matchup1>=.5
NewWindow=Window.Open(Current Round)
Window.Close(Current Round)
Window.Vote =Function(Index)
Candidates [Index] Votes++;
Next Round Button.AddEventListener(‘Click’,()
If(CurrentRound <TotalRounds)
CurrentRound++
Else:
Alert(‘Voting Has Ended)
If NextRoundButton.Disabled=True
Conclude Voting For Fourth Round 
<Header.Html>
Fifth Round
The Fifth Round Of Fan Voting
Render Round
RoundContainer.InnerHtml=<H5 Round {Fifth Round} <H5>
Candidates ForEach((Candidate,Index)
CandidateDiv.Innerhtml
<P> {Candidate Name} {Candidate Votes} Votes</P>
<Button On Click= “Vote {Index} >”Vote For {Candidate Name} </Button>
Round Container.AppendChild(CandidateDiv)
Add Event Listener (‘Dom Content Loaded)
Let Current Round=Round5
Total Rounds= 5
Round Container=Document.Get Element By Id(‘Round-Container’)
NextRoundButton=Document.Get Element By Id(‘Next-Round’)
String Numbers[Name ‘String Pair Votes‘]
Last Remaining Non-Concatenated String 
Last Remaining Non-Concatenated String 
<Subheading.Html>
Covid Strings Fan Voting Victory
The End Result Of Fan Voting 
Advance To Next Round (Strings To Advance)
Sorted Strings=(Strings.Sort(String1,String2) Strings 1 Votes String 2 Votes)
Advancing Strings=Sorted Strings.Slice(Winner String)
Return Winner
Last Remaining Non-Concatenated String=Last Non-Concatenated String Variable Left In Fan Voting
Last Remaining Concatenated String=Last Concatenated String Variable Left In Fan Voting
Return Advancing Strings 
Percentage Calculator
Part=Number Of Votes Per Day In Round 
Whole= Total Number Of Votes For String
Calculate {Part,Whole}
Return (Part/Whole)*100
Display (Part,Whole)
Percentage=This.Calculate(Part,Whole)
Return {Part} Is {Percentage} Of {Whole}
Result=PercentageCalculator.Display()
Console Log Result 
If Last Remaining Non-Concatenated String>=.5
If Last Remaining Concatenated String>=.5
NewWindow=Window.Open(Current Round)
Window.Close(Current Round)
Window.Vote =Function(Index)
Candidates [Index] Votes++;
Next Round Button.AddEventListener(‘Click’,()
If(CurrentRound <TotalRounds)
CurrentRound++
Else:
Alert(‘Voting Has Ended)
If NextRoundButton.Disabled=True
Conclude Voting For Fifth Round 
Return Filename
