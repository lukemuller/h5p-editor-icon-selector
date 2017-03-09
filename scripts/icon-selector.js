
/**
 * Icon selector widget module
 *
 * @param {H5P.jQuery} $
 */
 H5PEditor.widgets.iconSelector = H5PEditor.IconSelector = (function ($) {

  /**
   * Creates icon selector.
   *
   * @class H5PEditor.IconSelector
   *
   * @param {Object} parent
   * @param {Object} field
   * @param {string} params
   * @param {H5PEditor.SetParameters} setValue
   */
   function IconSelector(parent, field, params, setValue) {
    this.parent = parent;
    this.field = field;
    this.params = params;
    this.setValue = setValue;
  }

  /**
   * Append the field to the wrapper.
   *
   * @param {H5P.jQuery} $wrapper
   */
   IconSelector.prototype.appendTo = function ($wrapper) {
    var self = this;

    self.$container = $('<div>', {
      'class': 'field text h5p-icon-selector'
    });

    // Add header:
    $('<span>', {
      'class': 'h5peditor-label',
      html: self.field.label
    }).appendTo(self.$container);

    // Add description:
    $('<span>', {
      'class': 'h5peditor-field-description',
      html: self.field.description
    }).appendTo(self.$container);

    // Create input field
    self.$iconPicker = $('<input>', {
      'type': 'text',
      'id' : 'h5p-icon-picker',
      'name' :'h5p-icon-picker'
    }).appendTo(self.$container);

    self.config = {
      theme: 'fip-grey',
      iconsPerPage: 50,
      source: fontawesome_icons,
      emptyIcon: self.field.fontIconPicker.emptyIcon
    };

    self.$picker = self.$iconPicker.fontIconPicker(self.config);
    self.$picker.val(self.getIcon()).refreshPicker();

    self.$picker.on('change', function(){
      self.setIcon(self.$picker.val());
    });

    self.$container.appendTo($wrapper);
  };

  IconSelector.prototype.setIcon = function (icon) {
    // Save the value, allow empty string
    this.params = (icon === '' ? '' : icon);
    this.setValue(this.field, this.params);
  };

  IconSelector.prototype.getIcon = function () {
    var isEmpty = this.params === null || this.params === '' || this.params === undefined;
    return isEmpty ? '' : this.params;
  };

  /**
   * Validate the current values.
   *
   * @returns {boolean}
   */
   IconSelector.prototype.validate = function () {
    return (this.params);
  };

  /**
   * Remove the current field
   */
   IconSelector.prototype.remove = function () {};

   return IconSelector;
 })(H5P.jQuery);