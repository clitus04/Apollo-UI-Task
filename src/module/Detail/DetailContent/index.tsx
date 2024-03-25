import { memo } from "react";

function DetailContent() {
  return (
    <div className="detail__content">
      <img
        className="w-full mb-4"
        src="https://apollo.primereact.org/demo/images/blog/blogdetail.png"
        alt=""
      />
      <div className="title">Sodales massa, morbi convallis</div>
      <p>
        First, a disclaimer - the entire process of writing a blog post often
        takes more than a couple of hours, even if you can type eighty words per
        minute and your writing skills are sharp. From the seed of the idea to
        finally hitting “Publish,” you might spend several days or maybe even a
        week “writing” a blog post, but it‘s important to spend those vital
        hours planning your post and even thinking about Your Post(yes, thinking
        counts as working if you‘re a blogger) before you actually write it.
      </p>
      <p>
        There‘s an old maxim that states, “No fun for the writer, no fun for the
        reader.”No matter what industry you‘re working in, as a blogger, you
        should live and die by this statement.
      </p>
      <p>
        Before you do any of the following steps, be sure to pick a topic that
        actually interests you. Nothing - and I mean NOTHING- will kill a blog
        post more effectively than a lack of enthusiasm from the writer. You can
        tell when a writer is bored by their subject, and it‘s so cringe-worthy
        it‘s a little embarrassing.
      </p>
      <p>
        I can hear your objections already. “But Dan, I have to blog for a
        cardboard box manufacturing company.” I feel your pain, I really do.
        During the course of my career, I‘ve written content for dozens of
        clients in some less-than-thrilling industries (such as financial
        regulatory compliance and corporate housing), but the hallmark of a
        professional blogger is the ability to write well about any topic, no
        matter how dry it may be. Blogging is a lot easier, however, if you can
        muster at least a little enthusiasm for the topic at hand.
      </p>
      <div className="title">
        Commodo ultrices orci tempus et fermentum, pellentesque ultricies.
      </div>
      <ul>
        <li>
          Fermentum neque odio laoreet morbi sit. Venenatis in quam ut non.
        </li>
        <li>
          Enim in porta facilisi a vulputate fermentum, morbi. Consequat, id
          praesent tristique euismod pellentesque.
        </li>
        <li>Implements This is an external link</li>
        <li>
          Scelerisque ultricies tincidunt lectus faucibus non morbi sed nibh
          varius. Quam a, habitasse egestaseleifend.
        </li>
      </ul>
    </div>
  );
}

export default memo(DetailContent);
