const MapSection = () => {
  return (
    <section>
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <a
          href="https://yandex.ru/maps/971/taganrog/?utm_medium=mapframe&utm_source=maps"
          style={{
            color: '#eee',
            fontSize: '12px',
            position: 'absolute',
            top: 0,
          }}
        >
          Таганрог
        </a>
        <a
          href="https://yandex.ru/maps/geo/taganrog/53166063/?ll=38.881188%2C47.239140&utm_medium=mapframe&utm_source=maps&z=12.97"
          style={{
            color: '#eee',
            fontSize: '12px',
            position: 'absolute',
            top: '14px',
          }}
        >
          Таганрог — Яндекс Карты
        </a>
        <iframe
          title="Yandex"
          src="https://yandex.ru/map-widget/v1/-/CCUJvSApDC"
          width="100%"
          height="400"
          frameBorder={0}
          allowFullScreen
          style={{
            position: 'relative',
          }}
        />
      </div>
    </section>
  );
};

export default MapSection;
