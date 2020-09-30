import * as React from 'react';
import Image from '../src';
import '../assets/index.less';

export default function PreviewSrcMerge() {
  const onMergeSrc = React.useCallback((src: string) => {
    return `${src}?a=2222`;
  }, []);

  return (
    <div>
      <Image.PreviewGroup onMergeSrc={onMergeSrc}>
        <Image
          key={1}
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          width={200}
          style={{
            marginRight: 24,
          }}
        />
        <Image
          key={2}
          src="https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*P0S-QIRUbsUAAAAAAAAAAABkARQnAQ"
          width={200}
          style={{
            marginRight: 24,
          }}
        />
        <Image
          key={3}
          src="https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*ngiJQaLQELEAAAAAAAAAAABkARQnAQ"
          width={200}
          style={{
            marginRight: 24,
          }}
        />
      </Image.PreviewGroup>
    </div>
  );
}
