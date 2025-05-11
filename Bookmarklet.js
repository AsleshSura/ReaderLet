(
    function() {
        let stylePanel = document.createElement('div');

        stylePanel.style.position = 'fixed';
        stylePanel.style.top = '20px';
        stylePanel.style.right = '20px';
        stylePanel.style.width = '200px';
        stylePanel.style.padding = '15px';
        stylePanel.style.backgroundColor = 'white';
        stylePanel.style.border = '1px solid #ccc';
        stylePanel.style.borderRadius = '5px';
        stylePanel.style.boxShadow = '0 0 10px rgba(0,0,0,0.2)';
        stylePanel.style.zIndex = '9999';
        stylePanel.style.fontFamily = 'Arial, sans-serif';

        let title = document.createElement('h3');
        title.textContent = 'Customize Page Style';
        title.style.margin = '0 0 15px 0';
        stylePanel.appendChild(title);

        let form = document.createElement('form');
        form.onsubmit = function(event) {event.preventDefault();};

        document.body.appendChild(stylePanel);

        let fontFamilyLabel = document.createElement('label');
        fontFamilyLabel.textContent = 'Font Family: ';
        form.appendChild(fontFamilyLabel);

        let fontSelect = document.createElement('select');
        fontSelect.id = 'bookmarklet-font-family';
        fontSelect.style.display = 'block';
        fontSelect.style.width = '100%';
        fontSelect.style.marginBottom = '10px';

        // Add font options
        let fonts = ['Arial', 'Times New Roman', 'Georgia', 'Verdana', 'Courier New'];
        fonts.forEach(font => {
        let option = document.createElement('option');
        option.value = font;
        option.textContent = font;
        fontSelect.appendChild(option);
        });
        form.appendChild(fontSelect);

        // Font size slider
        let fontSizeLabel = document.createElement('label');
        fontSizeLabel.textContent = 'Font Size: ';
        form.appendChild(fontSizeLabel);

        let sizeValue = document.createElement('span');
        sizeValue.id = 'size-value';
        sizeValue.textContent = '16px';
        fontSizeLabel.appendChild(sizeValue);

        let sizeSlider = document.createElement('input');
        sizeSlider.type = 'range';
        sizeSlider.id = 'bookmarklet-font-size';
        sizeSlider.min = '8';
        sizeSlider.max = '24';
        sizeSlider.value = '16';
        sizeSlider.style.width = '100%';
        sizeSlider.style.marginBottom = '10px';
        sizeSlider.oninput = function() {
        document.getElementById('size-value').textContent = this.value + 'px';
        };
        form.appendChild(sizeSlider);

        // Text color picker
        let textColorLabel = document.createElement('label');
        textColorLabel.textContent = 'Text Color: ';
        form.appendChild(textColorLabel);

        let textColorPicker = document.createElement('input');
        textColorPicker.type = 'color';
        textColorPicker.id = 'bookmarklet-text-color';
        textColorPicker.value = '#000000';
        textColorPicker.style.marginBottom = '10px';
        form.appendChild(textColorPicker);
        form.appendChild(document.createElement('br'));

        // Background color picker
        let bgColorLabel = document.createElement('label');
        bgColorLabel.textContent = 'Background Color: ';
        form.appendChild(bgColorLabel);

        let bgColorPicker = document.createElement('input');
        bgColorPicker.type = 'color';
        bgColorPicker.id = 'bookmarklet-bg-color';
        bgColorPicker.value = '#FFFFFF';
        bgColorPicker.style.marginBottom = '15px';
        form.appendChild(bgColorPicker);
        form.appendChild(document.createElement('br'));

        // Apply button
        let applyButton = document.createElement('button');
        applyButton.textContent = 'Apply Changes';
        applyButton.style.marginRight = '10px';
        form.appendChild(applyButton);

        // Reset button
        let resetButton = document.createElement('button');
        resetButton.textContent = 'Reset';
        form.appendChild(resetButton);

        // Close button
        let closeButton = document.createElement('button');
        closeButton.textContent = 'X';
        closeButton.style.position = 'absolute';
        closeButton.style.top = '5px';
        closeButton.style.right = '5px';
        closeButton.style.border = 'none';
        closeButton.style.background = 'none';
        closeButton.style.cursor = 'pointer';
        stylePanel.appendChild(closeButton);
    }
)();