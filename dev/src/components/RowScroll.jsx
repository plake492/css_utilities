import React from 'react';
import { Card } from './Cards';
import CodeSnippet from './CodeSnippet';
import img1 from '../assets/images/1.jpg';
import img2 from '../assets/images/2.jpg';
import img3 from '../assets/images/3.jpg';
import img4 from '../assets/images/4.jpg';
import img5 from '../assets/images/5.jpg';
import img6 from '../assets/images/6.jpg';

const rightScrollCode = [
  {
    classList: 'row-scroll r-3 g-sm',
    children: [{ content: '...' }, { content: '...' }],
  },
];

const leftScrollCode = [
  {
    classList: 'row-scroll row-scroll-reverse r-2 g-xl',
    children: [{ content: '...' }, { content: '...' }],
  },
];

export default function RowScroll() {
  return (
    <>
      <p>
        Create side scrolling rows that adhear to the container spacing on
        either the left or right side
        <br />
        The direct children will have their max and min set
      </p>

      <div className="border-left border-right border-orange py-md">
        <div className="py-xl bg-violet-30 border-pill">
          <div className="px-md">
            <CodeSnippet code={rightScrollCode}>
              <p>Right Scroll</p>
            </CodeSnippet>
          </div>
          <div className="row-scroll r-3 g-sm mb-xl border-top border-bottom border-red border-2">
            <div className="img-wrapper ratio-1x1 border-rounded overflow-hidden">
              <img src={img6} />
            </div>
            <div className="img-wrapper ratio-1x1 border-rounded overflow-hidden">
              <img src={img1} />
            </div>
            <div className="img-wrapper ratio-1x1 border-rounded overflow-hidden">
              <img src={img3} />
            </div>
            <div className="img-wrapper ratio-1x1 border-rounded overflow-hidden">
              <img src={img4} />
            </div>
            <div className="img-wrapper ratio-1x1 border-rounded overflow-hidden">
              <img src={img5} />
            </div>
            <div className="img-wrapper ratio-1x1 border-rounded overflow-hidden">
              <img src={img6} />
            </div>
            <div className="img-wrapper ratio-1x1 border-rounded overflow-hidden">
              <img src={img1} />
            </div>
            <div className="img-wrapper ratio-1x1 border-rounded overflow-hidden">
              <img src={img6} />
            </div>
            <div className="img-wrapper ratio-1x1 border-rounded overflow-hidden">
              <img src={img1} />
            </div>
            <div className="img-wrapper ratio-1x1 border-rounded overflow-hidden">
              <img src={img2} />
            </div>
          </div>
        </div>

        <div className="py-xl mt-xl bg-violet-30 border-pill">
          <div className="px-md">
            <CodeSnippet code={leftScrollCode}>
              <p>Left Scroll</p>
              <p className="text-sm">
                To make this container scroll to the left, add
                `.row-scroll-reverse`
              </p>
            </CodeSnippet>
          </div>
          <div className="row-scroll row-scroll-reverse r-2 g-xxxl border-top border-bottom border-blue border-2">
            <div className="img-wrapper ratio-1x1 border-rounded overflow-hidden">
              <img src={img6} />
            </div>
            <div className="img-wrapper ratio-1x1 border-rounded overflow-hidden">
              <img src={img1} />
            </div>
            <div className="img-wrapper ratio-1x1 border-rounded overflow-hidden">
              <img src={img3} />
            </div>
            <div className="img-wrapper ratio-1x1 border-rounded overflow-hidden">
              <img src={img4} />
            </div>
            <div className="img-wrapper ratio-1x1 border-rounded overflow-hidden">
              <img src={img5} />
            </div>
            <div className="img-wrapper ratio-1x1 border-rounded overflow-hidden">
              <img src={img6} />
            </div>
            <div className="img-wrapper ratio-1x1 border-rounded overflow-hidden">
              <img src={img1} />
            </div>
            <div className="img-wrapper ratio-1x1 border-rounded overflow-hidden">
              <img src={img6} />
            </div>
            <div className="img-wrapper ratio-1x1 border-rounded overflow-hidden">
              <img src={img1} />
            </div>
            <div className="img-wrapper ratio-1x1 border-rounded overflow-hidden">
              <img src={img2} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
