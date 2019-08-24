import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eight-ball',
  templateUrl: './eight-ball.component.html',
  styleUrls: ['./eight-ball.component.css']
})
export class EightBallComponent implements OnInit {

  public eightBallMessage = "";

  private readonly eightBallMessages = ['It is certain.', 'It is decidedly so.', 'Yeah, Definitely..', 'Obviously not..', 'My sources say no.', 'That is definitely a no',
                                        'Without a doubt.', 'Definitely a yes.', 'Obviously yes..', 'For sure', 'Don\'t count on it.', 'Nah, no way.',
                                        'Of course!', 'As I see it, yes.', 'NOPE.', '<:fraud:242853232123183104>', 'My reply is no.', 'That is a big no.',
                                        'Hell yes.', 'Outlook good.', 'YES OR YES', 'Not right now..', 'Outlook not so good.', 'Not a chance.',
                                        'Yes.', 'Signs point to yes', 'Very doubtful.', 'No way in hell.',
                                        'Not in a million years.', 'Yeah, for sure.', 'Questionable.', 'I suppose so.', '*Noooooooope*', 'Never in a million years.',
                                        'Don\'t let your dreams be memes. It is definitely a YES.', 'NOOOOOO.', 'N.O.'];

  constructor() { }

  public ngOnInit() {
  }

  public onClick(){
    var result = Math.floor((Math.random() * this.eightBallMessages.length-1) +1);
    this.eightBallMessage = this.eightBallMessages[result];
  }
}
