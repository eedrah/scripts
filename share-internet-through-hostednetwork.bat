netsh wlan set hostednetwork mode=allow ssid=hostednetwork key=pwhostednetwork
netsh wlan start hostednetwork

# Control Panel\Network and Internet\Network Connections
# Connection > Sharing > Allow connection

# To stop
# netsh wlan stop hostednetwork
