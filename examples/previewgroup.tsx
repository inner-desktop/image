/* eslint-disable global-require */
import * as React from 'react';
import Image, { context } from '../src';
import '../assets/index.less';
import { useCallback, useContext, useRef } from 'react';
import {
  RotateLeftOutlined,
  CloseOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
  LeftOutlined,
  RightOutlined,
  RotateRightOutlined,
  AppstoreAddOutlined,
} from '@ant-design/icons';

const NestedImage: React.FC<{ utilRef: any; urls: string[] }> = ({ urls, utilRef }) => {
  const { registerImage, setCurrent, setShowPreview } = useContext(context);

  urls.forEach((url, index) => {
    registerImage(index, url);
  });

  const onShow = useCallback(
    (current: number) => {
      setCurrent(current);
      setShowPreview(true);
    },
    [setCurrent, setShowPreview],
  );

  utilRef.current = {
    onShow,
  };
  return null;
};

export default function PreviewGroup() {
  const urls = [require('./images/1.jpeg'), require('./images/2.jpeg'), require('./images/3.jpeg')];

  const icons = {
    rotateLeft: <RotateLeftOutlined />,
    rotateRight: <RotateRightOutlined />,
    zoomIn: <ZoomInOutlined />,
    zoomOut: <ZoomOutOutlined />,
    close: <CloseOutlined />,
    left: <LeftOutlined />,
    right: <RightOutlined />,
    collection: <AppstoreAddOutlined />,
  };

  const utilRef = useRef<any>();

  const onClickCollection = (url: string) => {
    console.log(url);
  };

  return (
    <div>
      <Image.PreviewGroup icons={icons} onClickCollection={onClickCollection} enableCollection>
        <Image wrapperStyle={{ marginRight: 24, width: 200 }} src={require('./images/1.jpeg')} />
        <Image
          wrapperStyle={{ marginRight: 24, width: 200 }}
          preview={false}
          src={require('./images/disabled.jpeg')}
        />
        <Image wrapperStyle={{ marginRight: 24, width: 200 }} src={require('./images/2.jpeg')} />
        <Image wrapperStyle={{ marginRight: 24, width: 200 }} src={require('./images/3.jpeg')} />
        <Image wrapperStyle={{ marginRight: 24, width: 200 }} src="error" alt="error" />
        <Image wrapperStyle={{ marginRight: 24, width: 200 }} src={require('./images/1.jpeg')} />
      </Image.PreviewGroup>

      <h2>PreviewGroup with NestedImage</h2>

      <Image.PreviewGroup icons={icons}>
        <NestedImage urls={urls} utilRef={utilRef} />
      </Image.PreviewGroup>

      <button
        onClick={() => {
          utilRef.current.onShow(0);
        }}
      >
        SHOW FIRST IMAGE
      </button>
    </div>
  );
}
