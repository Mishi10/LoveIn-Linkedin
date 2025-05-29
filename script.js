        // Floating hearts animation
        function createHeart() {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.innerHTML = ['💖', '💕', '💗', '💝', '💘'][Math.floor(Math.random() * 5)];
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
            heart.style.animationDelay = Math.random() * 2 + 's';
            document.getElementById('hearts').appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 6000);
        }

        setInterval(createHeart, 300);

        function showMatch(name) {
            document.getElementById('matchName').textContent = name;
            document.getElementById('overlay').classList.add('show');
            document.getElementById('matchPopup').classList.add('show');
            
            // Celebration animation
            for (let i = 0; i < 20; i++) {
                setTimeout(createHeart, i * 100);
            }
        }

        function hideMatch() {
            document.getElementById('overlay').classList.remove('show');
            document.getElementById('matchPopup').classList.remove('show');
        }

        function showInterest() {
            alert('💖 Interest sent! They\'ll be notified of your professional crush!');
        }

        function startChat() {
            alert('💬 Opening love chat... "Hey! I loved your thoughts on scaling microservices. Want to scale our conversation over coffee? ☕💕"');
            hideMatch();
        }

        function downloadExtension() {
            alert('🚀 Extension download started! \n\n📋 Installation includes:\n• Chrome Web Store package\n• manifest.json with permissions\n• Content scripts for LinkedIn transformation\n• Background service worker\n• Popup interface\n\nReady to find love in the professional world! 💕');
        }

        // Add some interactive hover effects
        document.querySelectorAll('.profile-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                createHeart();
            });
        });

        // Simulate real-time updates
        setInterval(() => {
            const indicators = document.querySelectorAll('.online-indicator');
            indicators.forEach(indicator => {
                if (Math.random() > 0.7) {
                    indicator.style.animation = 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite';
                    setTimeout(() => {
                        indicator.style.animation = 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite';
                    }, 2000);
                }
            });
        }, 5000);