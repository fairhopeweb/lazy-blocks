const { __ } = wp.i18n;

const { PanelBody, BaseControl, ToggleControl } = wp.components;

export default function WPMLRow(props) {
  const { updateData, data } = props;

  return (
    <PanelBody>
      <BaseControl label={__('WPML Translation', 'lazy-blocks')}>
        <ToggleControl
          label={__('Yes', 'lazy-blocks')}
          checked={'true' === data.translate}
          onChange={(value) => updateData({ translate: value ? 'true' : 'false' })}
        />
      </BaseControl>
    </PanelBody>
  );
}
