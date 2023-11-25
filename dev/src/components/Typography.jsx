import CodeSnippet from './CodeSnippet'

export default function Typography() {
  const verticalAlign = [
    'baseline',
    'top',
    'middle',
    'bottom',
    'text-bottom',
    'text-top',
  ]
  const headerSnips = [
    { tag: 'h1', content: 'Header 1' },
    { tag: 'h2', content: 'Header 2' },
    { tag: 'h3', content: 'Header 3' },
    { tag: 'h4', content: 'Header 4' },
    { tag: 'h5', content: 'Header 5' },
    { tag: 'h6', content: 'Header 6' },
  ]
  const headerClassSnips = [
    { tag: 'p', classList: 'h1', content: 'Header 1' },
    { tag: 'p', classList: 'h2', content: 'Header 2' },
    { tag: 'p', classList: 'h3', content: 'Header 3' },
    { tag: 'p', classList: 'h4', content: 'Header 4' },
    { tag: 'p', classList: 'h5', content: 'Header 5' },
    { tag: 'p', classList: 'h6', content: 'Header 6' },
  ]

  return (
    <section className="container-xxl">
      <div className="mb-md pb-md pt-xxl">
        <CodeSnippet code={headerSnips} desc="Header Tags">
          <p className="h1">Header 1</p>
          <p className="h2">Header 2</p>
          <p className="h3">Header 3</p>
          <p className="h4">Header 4</p>
          <p className="h5">Header 5</p>
          <p className="h6">Header 6</p>
        </CodeSnippet>
        <p className="p-2">Header classes are also available.</p>
        <CodeSnippet code={headerClassSnips} desc="With classes" />
      </div>
      <div className="mb-md pb-md">
        <p className="h3">text-lg</p>
        <p className="text-lg">
          There's a lot to do in space. I want to learn more about the
          greenhouse effect on Venus, about whether there was life on Mars,
          about the environment in which Earth and the Sun is immersed, the
          behavior of the Sun. The problem is not scientifically illiterate
          kids; it is scientifically illiterate adults. Kids are born curious
          about the natural world. They are always turning over rocks, jumping
          with two feet into mud puddles and playing with the tablecloth and
          fine china. I don't care what town you're born in, what city, what
          country. If you're a child, you are curious about your environment.
          You're overturning rocks. You're plucking leaves off of trees and
          petals off of flowers, looking inside, and you're doing things that
          create disorder in the lives of the adults around you. There is always
          a place I can take someone's curiosity and land where they end up
          enlightened when we're done.
        </p>
        <CodeSnippet
          code={[
            {
              tag: 'p',
              classList: 'text-lg',
              content:
                "There's a lot to do in space. I want to learn more about...",
            },
          ]}
        />
        <p className="h4">text-md</p>
        <p className="text-md">
          I claim that space is part of our culture. You've heard complaints
          that nobody knows the names of the astronauts, that nobody gets
          excited about launches, that nobody cares anymore except people in the
          industry. I don't believe that for a minute. What you need, above all
          else, is a love for your subject, whatever it is. You've got to be so
          deeply in love with your subject that when curve balls are thrown,
          when hurdles are put in place, you've got the energy to overcome them.
          Although I'm not actually embarrassed by this, I tend not to read
          books that have awesome movies made from them, regardless of how well
          or badly the movie represented the actual written story. For most of
          human civilization, the pace of innovation has been so slow that a
          generation might pass before a discovery would influence your life,
          culture or the conduct of nations.
        </p>
        <CodeSnippet
          desc={
            'This is the defualt <p> style, and is also usable with a class'
          }
          code={[
            {
              tag: 'p',
              classList: 'text-md',
              content:
                "I claim that space is part of our culture. You've heard...",
            },
            {
              tag: 'p',
              content:
                "I claim that space is part of our culture. You've heard...",
            },
          ]}
        />
        <p className="h5">text-sm</p>
        <p className="text-sm">
          We account for one-sixth of the forces of gravity we see in the
          universe. There is no known objects accounting for most of the
          effective gravity in the universe. Something is making stuff move that
          is not anything we have ever touched. Our galaxy, the Milky Way, is
          one of 50 or 100 billion other galaxies in the universe. And with
          every step, every window that modern astrophysics has opened to our
          mind, the person who wants to feel like they're the center of
          everything ends up shrinking. If you think of feelings you have when
          you are awed by something - for example, knowing that elements in your
          body trace to exploded stars - I call that a spiritual reaction,
          speaking of awe and majesty, where words fail you. In the animal
          kingdom, one of the keys to survival is to outwit your enemies. And
          when you're surrounded by carnivores, one of the best strategies is to
          fade into the background and disappear.
        </p>
        <CodeSnippet
          code={[
            {
              tag: 'p',
              classList: 'text-sm',
              content:
                'We account for one-sixth of the forces of gravity we see in...',
            },
          ]}
        />
        <p className="h6">text-xs</p>
        <p className="text-xs">
          Let me tell you something about full moons: kids don't care about full
          moons. They'll play in a full moon, no worries at all. They only get
          scared of magic or werewolves from stupid adults and their stupid
          adult stories. Asteroids have us in our sight. The dinosaurs didn't
          have a space program, so they're not here to talk about this problem.
          We are, and we have the power to do something about it. I don't want
          to be the embarrassment of the galaxy, to have had the power to
          deflect an asteroid, and then not, and end up going extinct. When an
          industry matures, it means it's not advancing, and of course the jobs
          go overseas.
        </p>
        <CodeSnippet
          code={[
            {
              tag: 'p',
              classList: 'text-xs',
              content: 'Let me tell you something about full moons...',
            },
          ]}
        />
      </div>
      <div className="mb-md pb-md p-xl bg-violet-20 border-pill shadow-5 shadow-violet escape-container">
        <div>
          <p className="h4">Lists</p>
        </div>
        <div className="row g-xl">
          <div className="col-6 col-md-4">
            <p className="text-lg font-weight-600">Unordered List</p>
            <ul>
              <li>
                <p>List</p>
              </li>
              <li>
                <p>List</p>
              </li>
              <li>
                <p>List</p>
              </li>
              <li>
                <a href="#">link</a>
              </li>
              <li className="no-list-style">
                <a href="#">
                  link with <i>.no-list-syle</i> on the `li`
                </a>
              </li>
              <li className="no-list-style">
                <p>
                  List item with <i>.no-list-syle</i> on the `li`
                </p>
              </li>
              <li>
                <p>List</p>
              </li>
              <li>
                <ul>
                  <li>
                    <p>nested</p>
                  </li>
                  <li>
                    <p>nested</p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-4">
            <p className="text-lg font-weight-600">
              ul with <i>.no-list-style</i> on `ul`
            </p>
            <ul className="no-list-style">
              <li>
                <p>list item</p>
              </li>
              <li>
                <p>list item</p>
              </li>
              <li>
                <p>list item</p>
              </li>
              <li>
                <p>list item</p>
              </li>
              <li>
                <p>list item</p>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-4">
            <p className="text-lg font-weight-600">Ordered List</p>
            <ol>
              <li>List</li>
              <li>List</li>
              <li>List</li>
              <li>List</li>
              <li>
                <ol>
                  <li>Nested</li>
                  <li>Nested</li>
                  <li>Nested</li>
                  <li>Nested</li>
                </ol>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className="mb-md pb-md">
        <p className="h4">Section with blockquote and indent</p>
        <CodeSnippet
          code={[
            {
              tag: 'p',
              classList: 'indent',
              content:
                "I claim that space is part of our culture. You've heard...",
            },
          ]}
          desc="Header Tags"
        >
          <p className="indent">
            I claim that space is part of our culture. You've heard complaints
            that nobody knows the names of the astronauts, that nobody gets
            excited about launches, that nobody cares anymore except people in
            the industry. I don't believe that for a minute. What you need,
            above all else, is a love for your subject, whatever it is. You've
            got to be so deeply in love with your subject that when curve balls
            are thrown, when hurdles are put in place, you've got the energy to
            overcome them. Darwin's theory of evolution is a framework by which
            we understand the diversity of life on Earth. But there is no
            equation sitting there in Darwin's 'Origin of Species' that you
            apply and say,
          </p>
        </CodeSnippet>
        <p>
          What is this species going to look like in 100 years or 1,000 years?'
          Biology isn't there yet with that kind of predictive precision. You
          have people who believe they are scientifically literate but, in fact,
          are not. And I don't mind if you're not scientifically literate, but
          just admit that to yourself, so that you'll know, and perhaps you can
          take a first step to try to eradicate that. Kids should be allowed to
          break stuff more often. That's a consequence of exploration.
          Exploration is what you do when you don't know what you're doing.
          That's what scientists do every day. The universe is large and old,
          and the ingredients for life as we know it are everywhere, so there's
          no reason to think that Earth would be unique in that regard. Whether
          of not the life became intelligent is a different question, and we'll
          see if we find that.
        </p>
        <blockquote className="drop-cap">
          While I'm not actually embarrassed by this, I tend not to read books
          that have awesome movies made from them, regardless of how well or
          badly the movie represented the actual written story. For most of
          human civilization, the pace of innovation has been so slow that a
          generation might pass before a discovery would influence your life,
          culture or the conduct of nations.
        </blockquote>
        <p className="bg-black">
          Add <i>.drop-cap</i>
        </p>
        <p>
          When an industry matures, it means it's not advancing, and of course
          the jobs go overseas. That's the obligation of the multi-national
          corporation: to put the factory where it can make the widget as cheap
          as possible. Don't get angry when a corporation does that; we've all
          bought into this concept. We live in a capitalistic society. I always
          try to get people a different outlook. When you do that, people take
          ownership of the information.
        </p>
      </div>
      <div className="mb-md pb-md">
        <p className="h4">Vertical Align</p>
        <CodeSnippet
          code={verticalAlign.map((align) => ({
            tag: 'p',
            content: align,
            classList: 'h4 mb-none',
            children: [
              {
                tag: 'span',
                classList: `align-${align} text-xs`,
                content: 'Aligned Text',
              },
            ],
          }))}
        >
          {verticalAlign.map((align, index) => (
            <div key={align + index} className="my-xl position-relative">
              <p className="h4 mb-none border-bottom border-top">
                {align}{' '}
                <span className={`align-${align} text-xs`}>Aligned Text</span>
              </p>
              <div className="position-absolute top-50 w-100 absolute-center-y border border-red opacity-50"></div>
            </div>
          ))}
        </CodeSnippet>
      </div>
      <div className="mb-md pb-md d-flex gap-md">
        <a>Just an a tag</a>

        <a className="link">Class link</a>

        <a className="link link--hover">Link hover</a>

        <a className="link link--no-underline">Link link--no-underline</a>

        <a href="#WHAT" className="link" disabled>
          Link link--no-underline
        </a>
      </div>
      <div className="mb-md pb-md">
        <div className="mb-md pb-md">
          <button className="btn btn--primary">Primary</button>
        </div>
        <div className="mb-md pb-md">
          <button className="btn btn--primary btn--block">Primary Block</button>
        </div>

        <div className="mb-md pb-md">
          <button className="btn btn--secondary">Secondary</button>
        </div>

        <div className="mb-md pb-md">
          <button className="btn btn--secondary btn--large">
            Secondary large
          </button>
        </div>

        <div className="mb-md pb-md">
          <button className="btn btn--border-only">Border Only</button>
        </div>

        <div className="mb-md pb-md">
          <button className="btn btn--arrow">arrow</button>
        </div>

        <div className="mb-md pb-md">
          <button className="btn btn--arrow-reverse">arrow</button>
        </div>
        <div className="mb-md pb-md">
          <button className="btn btn--arrow btn--primary">arrow</button>
        </div>
        <div className="mb-md pb-md">
          <button className="btn btn--arrow-reverse btn--border-only">
            arrow
          </button>
        </div>
        <div className="mb-md pb-md">
          <button className="btn btn--clear">Clear</button>
        </div>
      </div>
    </section>
  )
}
