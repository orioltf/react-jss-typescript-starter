// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';

/**
 * Adds the Styleguide-FieldUsage-Checkbox component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.ts) when 'jss manifest' is run.
 */
export default function(manifest: Manifest): void {
  manifest.addComponent({
    name: 'Styleguide-FieldUsage-Checkbox',
    icon: SitecoreIcon.CheckboxSelected,
    fields: [
      { name: 'checkbox', type: CommonFieldTypes.Checkbox },
      { name: 'checkbox2', type: CommonFieldTypes.Checkbox },
    ],
    // inherit fields from another template (../templates/Styleguide-Explanatory-Component)
    // inheritance adds fields defined on the base template(s) implicitly to this component
    inherits: ['styleguide-explanatory-component-template'],
  });
}
